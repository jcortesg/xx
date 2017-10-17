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

    timestamps()
  end

  @doc false
  def changeset(%Ratios{} = ratios, attrs) do
    ratios
    |> cast(attrs, [:revenue_growth, :net_income_growth, :net_income_percent, :operating_income, :return_on_equety, :return_on_assent, :assent_revenue, :non_cash_assent, :equity_to_assent, :rev_per_employee, :gross_margin, :general_admin, :r_y_d, :gya_ryd_ratio, :gya_op_ryd])
    |> validate_required([:revenue_growth, :net_income_growth, :net_income_percent, :operating_income, :return_on_equety, :return_on_assent, :assent_revenue, :non_cash_assent, :equity_to_assent, :rev_per_employee, :gross_margin, :general_admin, :r_y_d, :gya_ryd_ratio, :gya_op_ryd])
  end

  def calculate(data) do
    attrs =
      Map.new
      |> revenue_growth(data)
      |> net_income_growth(data)
      |> net_income_percent(data)
      |> operating_income(data)
      |> return_equity(data)

    IO.inspect(attrs)
  end
  def other_peration(data) do
   data.total_operating_expenses - data.research_development - data.marketing_expenses - data.selling_general
  end

  def return_equity(attrs, data) do
    if(data.total_revenue > 0) do
      value = Float.ceil(((data.net_income + other_peration(data))/data.total_revenue), 2)
    else
      value = 0
    end
    Map.merge(attrs, %{return_on_equety: value})
  end

  def operating_income(attrs, data) do
    if(data.total_revenue > 0) do
      value = Float.ceil(((data.net_income + other_peration(data))/data.total_revenue), 2)
    else
      value = 0
    end
    Map.merge(attrs, %{operating_income: value})
  end

  def revenue_growth(attrs, data) do
    if(data.prior_revenue > 0)do
      revenue_growth = Float.ceil((data.total_revenue/data.prior_revenue)-1, 2)
    else
      revenue_growth = 0
    end
    Map.merge(attrs, %{revenue_growth: revenue_growth })
  end

  def net_income_growth(attrs, data) do
   if(data.prior_net_income > 0) do
     net_income_growth = Float.ceil((data.net_income/data.prior_net_income)-1, 2)
   else
     net_income_growth = 0
   end
   Map.merge(attrs, %{net_income_growth: net_income_growth})
  end

  def net_income_percent(attrs, data) do
    if(data.total_revenue > 0) do
      value = Float.ceil((data.net_income/data.total_revenue), 2)
    else
      value = 0
    end
    Map.merge(attrs, %{net_income_percent: value})
  end
end
