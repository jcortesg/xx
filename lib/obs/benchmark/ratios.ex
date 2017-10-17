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
    |> cast(attrs, [:revenue_growth, :datasheet_id, :net_income_growth, :net_income_percent, :operating_income, :return_on_equety, :return_on_assent, :assent_revenue, :non_cash_assent, :equity_to_assent, :rev_per_employee, :gross_margin, :general_admin, :r_y_d, :gya_ryd_ratio, :gya_op_ryd])
    |> validate_required([:revenue_growth, :net_income_growth, :net_income_percent, :operating_income, :return_on_equety, :return_on_assent, :assent_revenue, :non_cash_assent, :equity_to_assent, :rev_per_employee, :gross_margin, :general_admin, :r_y_d, :gya_ryd_ratio, :gya_op_ryd])
  end

  def calculate(data) do
    attrs =
      Map.new([{:datasheet_id, data.id}])
      |> equity_to_assent(data)
      |> return_assets(data)
      |> non_cash_assent(data)
      |> revenue_growth(data)
      |> net_income_growth(data)
      |> net_income_percent(data)
      |> operating_income(data)
      |> return_equity(data)
      |> assets_revenue(data)
      |> rev_per_employee(data)
      |> gross_margin(data)
      |> general_admin(data)
      |> r_y_d(data)
      |> gya_ryd_ratio(data)
      |> gya_op_ryd(data)

    %Ratios{}
    |>Ratios.changeset(attrs)
    |> Obs.Repo.insert!
  end

  def gya_op_ryd(attrs, data) do
    if( data.research_development > 0) do
      value = Float.ceil((other_peration(data)+ data.selling_general) /(data.research_development), 2)
    else
      value = 0
    end
    Map.merge(attrs, %{gya_op_ryd: value})
  end

  def gya_ryd_ratio(attrs, data)do
    if( data.research_development > 0) do
      value = Float.ceil(data.selling_general /(data.research_development), 2)
    else
      value = 0
    end
    Map.merge(attrs, %{gya_ryd_ratio: value})
  end

  def r_y_d(attrs, data) do
    if( data.total_revenue > 0) do
      value = Float.ceil(data.research_development /(data.total_revenue), 2)
    else
      value = 0
    end
    Map.merge(attrs, %{r_y_d: value})
  end

  def general_admin(attrs, data) do
    if( data.total_revenue > 0) do
      value = Float.ceil(data.selling_general /(data.total_revenue), 2)
    else
      value = 0
    end
    Map.merge(attrs, %{general_admin: value})
  end

  def gross_margin(attrs, data) do
    if( data.total_revenue > 0) do
      value = Float.ceil((data.total_revenue - data.cost_revenue) /(data.total_revenue), 2)
    else
      value = 0
    end
    Map.merge(attrs, %{gross_margin: value})
  end

  def other_peration(data) do
   data.total_operating_expenses - data.research_development - data.marketing_expenses - data.selling_general
  end

  def share_equity(data) do
    data.total_assets - data.total_liabilities - data.retained_earnings
  end

  def rev_per_employee(attrs, data) do
    if( data.employ > 0) do
      value = Float.ceil(data.total_revenue/(data.employ*1000), 2)
    else
      value = 0
    end
    Map.merge(attrs, %{rev_per_employee: value})
  end

  def equity_to_assent(attrs, data) do
    if( data.total_assets > 0) do
      value = Float.ceil(((share_equity(data) + data.retained_earnings)/data.total_assets), 2)
    else
      value = 0
    end
    Map.merge(attrs, %{equity_to_assent: value})
  end

  def non_cash_assent(attrs, data) do
    if( data.total_revenue > 0) do
      value = Float.ceil(((data.total_assets - data.cash - data.short_term_investments)/data.total_revenue), 2)
    else
      value = 0
    end
    Map.merge(attrs, %{non_cash_assent: value})
  end

  def assets_revenue(attrs, data) do
    if( data.total_revenue > 0) do
      value = Float.ceil((data.total_assets/data.total_revenue), 2)
    else
      value = 0
    end
    Map.merge(attrs, %{assent_revenue: value})
  end

  def return_assets(attrs, data) do
    if( data.total_assets > 0) do
      value = Float.ceil((data.net_income/data.total_assets), 2)
    else
      value = 0
    end
    Map.merge(attrs, %{return_on_assent: value})
  end

  def return_equity(attrs, data) do
    dep = share_equity(data) + data.retained_earnings
    if( dep > 0) do
      value = Float.ceil((data.net_income/dep), 2)
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
