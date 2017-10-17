defmodule Obs.Repo.Migrations.CreateRatios do
  use Ecto.Migration

  def change do
    create table(:ratios) do
      add :revenue_growth, :float
      add :net_income_growth, :float
      add :net_income_percent, :float
      add :operating_income, :float
      add :return_on_equety, :float
      add :return_on_assent, :float
      add :assent_revenue, :float
      add :non_cash_assent, :float
      add :equity_to_assent, :float
      add :rev_per_employee, :float
      add :gross_margin, :float
      add :general_admin, :float
      add :r_y_d, :float
      add :gya_ryd_ratio, :float
      add :gya_op_ryd, :float

      add :datasheet_id, references(:datasheets, on_delete: :nothing)

      timestamps()
    end
    create index(:ratios, [:datasheet_id])
  end
end
