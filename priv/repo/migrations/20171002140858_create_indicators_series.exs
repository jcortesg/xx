defmodule Obs.Repo.Migrations.CreateIndicatorsSeries do
  use Ecto.Migration

  def change do
    create table(:indicators_series) do
      add :name, :string
      add :description, :string
      add :source, :string
      add :type, :string
      add :data, {:array, :map}
      add :dataset_id, references(:datasets, on_delete: :delete_all)

      timestamps()
    end

    create index(:indicators_series, [:dataset_id])
  end
end
