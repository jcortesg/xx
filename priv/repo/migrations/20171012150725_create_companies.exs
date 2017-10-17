defmodule Obs.Repo.Migrations.CreateCompanies do
  use Ecto.Migration

  def change do
    create table(:companies) do
      add :company_name, :string
      add :ticker, :string
      add :web, :string
      add :category_id, references(:categories, on_delete: :nothing)

      timestamps()
    end
    create index(:companies,[:category_id])
  end
end
