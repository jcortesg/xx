defmodule Obs.Benchmark.Datasheet do
  use Ecto.Schema
  import Ecto.Changeset
  alias Obs.Benchmark.Datasheet


  schema "datasheets" do
    field :cash, :float
    field :cost_revenue, :float
    field :debt_equity, :float
    field :div_yield, :float
    field :employ, :float
    field :free_cash_flow, :float
    field :inventory, :float
    field :market_cap, :float
    field :marketing_expenses, :float
    field :net_income, :float
    field :net_income_co_ops, :float
    field :net_profit_margin, :float
    field :net_receivables, :float
    field :p_e, :float
    field :price_book, :float
    field :prior_net_income, :float
    field :prior_revenue, :float
    field :research_development, :float
    field :retained_earnings, :float
    field :roe, :float
    field :selling_general, :float
    field :short_term_investments, :float
    field :total_assets, :float
    field :total_current_assets, :float
    field :total_current_liabilities, :float
    field :total_liabilities, :float
    field :total_long_term_liabilities, :float
    field :total_operating_expenses, :float
    field :total_revenue, :float

    belongs_to :company, Obs.Benchmark.Company

    timestamps()
  end

  @doc false
  def changeset(%Datasheet{} = datasheet, attrs) do
    datasheet
    |> cast(attrs, [:total_revenue, :cost_revenue, :research_development, :marketing_expenses, :selling_general, :total_operating_expenses, :net_income_co_ops, :net_income, :prior_revenue, :prior_net_income, :cash, :short_term_investments, :net_receivables, :inventory, :total_current_assets, :total_assets, :total_current_liabilities, :total_long_term_liabilities, :total_liabilities, :retained_earnings, :employ, :market_cap, :p_e, :roe, :div_yield, :debt_equity, :price_book, :net_profit_margin, :free_cash_flow])
    |> cast_assoc(:company)
    |> validate_required([:total_revenue, :cost_revenue, :research_development, :marketing_expenses, :selling_general, :total_operating_expenses, :net_income_co_ops, :net_income, :prior_revenue, :prior_net_income, :cash, :short_term_investments, :net_receivables, :inventory, :total_current_assets, :total_assets, :total_current_liabilities, :total_long_term_liabilities, :total_liabilities, :retained_earnings, :employ, :market_cap, :p_e, :roe, :div_yield, :debt_equity, :price_book, :net_profit_margin, :free_cash_flow])
  end
end
