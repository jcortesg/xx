defmodule Obs.Repo.Migrations.CreateDatasheets do
  use Ecto.Migration

  def change do
    create table(:datasheets) do
      add :total_revenue, :float
      add :cost_revenue, :float
      add :research_development, :float
      add :marketing_expenses, :float
      add :selling_general, :float
      add :total_operating_expenses, :float
      add :net_income_co_ops, :float
      add :net_income, :float
      add :prior_revenue, :float
      add :prior_net_income, :float
      add :cash, :float
      add :short_term_investments, :float
      add :net_receivables, :float
      add :inventory, :float
      add :total_current_assets, :float
      add :total_assets, :float
      add :total_current_liabilities, :float
      add :total_long_term_liabilities, :float
      add :total_liabilities, :float
      add :retained_earnings, :float
      add :employ, :float
      add :market_cap, :float
      add :p_e, :float
      add :roe, :float
      add :div_yield, :float
      add :debt_equity, :float
      add :price_book, :float
      add :net_profit_margin, :float
      add :free_cash_flow, :float
      add :category_id, references(:categories, on_delete: :nothing)
      add :company_id, references(:companies, on_delete: :nothing)

      timestamps()
    end
    create index(:datasheets, [:company_id])
    create index(:datasheets, [:category_id])
  end
end
