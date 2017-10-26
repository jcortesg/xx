defmodule Obs.Benchmark.Ratios do
  use Ecto.Schema
  import Ecto.Changeset
  alias Obs.Benchmark.Ratios


  schema "ratios" do
    field :assent_revenue, :float
    field :equity_to_assent, :float
    field :general_admin, :float
    field :gross_margin, :float
    field :gya_op_ryd, :float
    field :gya_ryd_ratio, :float
    field :net_income_growth, :float
    field :net_income_percent, :float
    field :non_cash_assent, :float
    field :operating_income, :float
    field :r_y_d, :float
    field :return_on_assent, :float
    field :return_on_equety, :float
    field :rev_per_employee, :float
    field :revenue_growth, :float

    belongs_to :datasheet, Obs.Benchmark.Datasheet

    timestamps()
  end

  @doc false
  def changeset(%Ratios{} = ratios, attrs) do
    ratios
    |> cast(attrs,
    [:revenue_growth, :datasheet_id, :net_income_growth, :net_income_percent, :operating_income, :return_on_equety, :return_on_assent, :assent_revenue, :non_cash_assent, :equity_to_assent, :rev_per_employee, :gross_margin, :general_admin, :r_y_d, :gya_ryd_ratio, :gya_op_ryd]
    )
    |> validate_required([])
  end

  def calculate(data) do
    func_gya_op_ry = &(other_peration(&1) + &1.selling_general)/&1.research_development
    field_gya_op_ry = [data.total_operating_expenses, data.research_development, data.marketing_expenses, data.selling_general]

    fun_gya_ryd_ratio = &(&1.selling_general / &1.research_development)
    field_gya_ryd_ratio = [data.selling_general, data.research_development]

    func_r_y_d = &(&1.research_development/&1.total_revenue)
    fields_r_y_d = [data.research_development, data.total_revenue]

    func_general_admin = &(&1.selling_general/&1.total_revenue)
    fields_general_admin = [data.selling_general, data.total_revenue]

    func_gross_margin = &((&1.total_revenue - &1.cost_revenue)/&1.total_revenue)
    fields_gross_margin = [data.total_revenue, data.cost_revenue]

    func_rev_per_employee = &(&1.total_revenue/(&1.employ*1000))
    fields_rev_per_employee = [data.total_revenue, data.employ]

    func_equity_to_assent = &(( share_equity(&1) - &1.retained_earnings)/ &1.total_assets)
    fields_equity_to_assent = [data.total_assets, data.total_liabilities, data.retained_earnings]

    func_non_cash_assent = &((&1.total_assets - &1.cash - &1.short_term_investments) / &1.total_revenue)
    fields_non_cash_assent = [data.total_assets, data.cash, data.short_term_investments, data.total_revenue]

    func_assets_revenue = &(&1.total_assets/&1.total_revenue)
    fields_assets_revenue = [data.total_assets, data.total_revenue]

    func_return_assets = &(&1.net_income/&1.total_assets)
    fields_return_assets = [data.net_income, data.total_assets]

    func_return_equity = &(&1.net_income/(share_equity(&1) + &1.retained_earnings))
    fields_return_equity = [data.total_assets, data.total_liabilities, data.retained_earnings, data.net_income]

    func_revenue_growth = &(&1.total_revenue/&1.prior_revenue)-1
    fields_revenue_growth = [data.total_revenue, data.prior_revenue]

    func_operating_income= &((&1.net_income + other_peration(&1))/ &1.total_revenue)
    fields_operating_income = [data.net_income, data.total_operating_expenses, data.research_development, data.marketing_expenses, data.selling_general, data.total_revenue]

    func_net_income_growth = &(&1.net_income/&1.prior_net_income)-1
    fields_net_income_growth = [data.net_income, data.prior_net_income]

    func_net_income_percent = &(&1.net_income/&1.total_revenue)
    fields_net_income_percent = [data.net_income, data.total_revenue]

    attrs =
      Map.new([{:datasheet_id, data.id}])
      |> calcule_data(func_gya_op_ry, field_gya_op_ry, [data.research_development], :gya_op_ryd, data)
      |> calcule_data(fun_gya_ryd_ratio, field_gya_ryd_ratio, [data.research_development], :gya_ryd_ratio, data)
      |> calcule_data(func_r_y_d, fields_r_y_d, [data.total_revenue], :r_y_d, data)
      |> calcule_data(func_general_admin, fields_general_admin, [data.total_revenue], :general_admin, data)
      |> calcule_data(func_gross_margin, fields_gross_margin, [data.total_revenue], :gross_margin, data)
      |> calcule_data(func_rev_per_employee, fields_rev_per_employee, [], :rev_per_employee, data)
      |> calcule_data(func_equity_to_assent, fields_equity_to_assent,[data.total_assets], :equity_to_assent, data)
      |> calcule_data(func_non_cash_assent, fields_non_cash_assent, [data.total_revenue], :non_cash_assent, data )
      |> calcule_data(func_return_assets, fields_return_assets, [data.total_revenue], :return_on_assent, data)
      |> calcule_data(func_assets_revenue, fields_assets_revenue, [data.total_assets], :assent_revenue, data)
      |> calcule_data(func_return_equity, fields_return_equity, [data.retained_earnings], :return_on_equety, data)
      |> calcule_data(func_revenue_growth, fields_revenue_growth, [data.prior_revenue], :revenue_growth, data)
      |> calcule_data(func_operating_income, fields_operating_income, [data.total_revenue], :operating_income, data)
      |> calcule_data(func_net_income_growth, fields_net_income_growth,  [data.prior_net_income], :net_income_growth, data)
      |> calcule_data(func_net_income_percent, fields_net_income_percent, [data.total_revenue], :net_income_percent, data)

    %Ratios{}
    |>Ratios.changeset(attrs)
    |> Obs.Repo.insert!
  end

  def any_nil?(values), do: Enum.any?(values, & &1 == nil)
  def any_zero?(validation), do: Enum.any?(validation, & &1 == 0)

  def calcule_data(attrs, func, values, validation, key, data) do
    IO.inspect key
    cond do
      any_nil?(values) || any_zero?(validation) ->
        IO.puts "Algún valor esta frito!"
        attrs
      true ->
        Map.put(attrs, key ,Float.round(func.(data), 3))
    end
  end

  def other_peration(data) do
    data.total_operating_expenses - data.research_development - data.marketing_expenses - data.selling_general
  end

  def share_equity(data) do
    data.total_assets - data.total_liabilities - data.retained_earnings
  end
end
