defmodule Obs.Repo.Migrations.CreateDatasets do
  use Ecto.Migration

  def change do
    create table(:datasets) do
      add :title, :string
      add :source, :string
      add :description, :string
      add :type, :string
      add :periodicity, :string
      add :measurement_unit, :string
      add :x_type, :string
      add :serie_type, :string
      add :battery_id, references(:batteries, on_delete: :nothing)

      timestamps()
    end

    create index(:datasets, [:battery_id])
  end
end
