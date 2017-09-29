defmodule Obs.Repo.Migrations.CreateDatasets do
  use Ecto.Migration

  def change do
    create table(:datasets) do
      add :title, :string
      add :source, :string
      add :data, :map
      add :batterie_id, references(:batteries, on_delete: :nothing)

      timestamps()
    end

    create index(:datasets, [:batterie_id])
  end
end
