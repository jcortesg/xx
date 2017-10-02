defmodule Obs.Indicators.Serie do
  use Ecto.Schema
  import Ecto.Changeset
  alias Obs.Indicators.Serie


  schema "indicators_series" do
    field :data, :string
    field :description, :string
    field :name, :string
    field :source, :string
    field :type, :string
    field :dataset_id, :id

    timestamps()
  end

  @doc false
  def changeset(%Serie{} = serie, attrs) do
    serie
    |> cast(attrs, [:name, :description, :source, :type, :data])
    |> validate_required([:name, :description, :source, :type, :data])
  end
end
