defmodule Obs.Repo.Migrations.CreateIndicatorCategories do
  use Ecto.Migration

  def change do
    create table(:indicator_categories) do
      add :name, :string

      timestamps()
    end

    create unique_index(:indicator_categories, [:name])
  end
end
