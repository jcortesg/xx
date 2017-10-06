defmodule Obs.Repo.Migrations.CreateBatteries do
  use Ecto.Migration

  def change do
    create table(:batteries) do
      add :title, :string
      add :description, :text
      add :sources, :string
      add :observation, :string
      add :category_id, references(:indicator_categories, on_delete: :nothing)

      timestamps()
    end
    create index(:batteries,[:category_id])
  end
end
