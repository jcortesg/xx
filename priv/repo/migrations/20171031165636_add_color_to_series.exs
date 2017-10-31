defmodule Obs.Repo.Migrations.AddColorToSeries do
  use Ecto.Migration

  def change do
    alter table(:indicators_series) do
      add :color, :text, null: false, default: "#67b7dc"
      remove :description
      remove :source
    end
  end
end
