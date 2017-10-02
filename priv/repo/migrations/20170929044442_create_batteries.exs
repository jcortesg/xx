defmodule Obs.Repo.Migrations.CreateBatteries do
  use Ecto.Migration

  def change do
    create table(:batteries) do
      add :title, :string
      add :description, :text
      add :sources, :string
      add :observation, :string

      timestamps()
    end

  end
end
