defmodule Obs.Repo.Migrations.CreateCompanies do
  use Ecto.Migration

  def change do
    create table(:companies) do
      add :name, :string
      add :category_id, references(:categories, on_delete: :nothing)

      timestamps()
    end
    create index(:companies,[:category_id])
  end
end
