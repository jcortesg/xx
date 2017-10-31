defmodule Obs.Indicators.Serie do
  use Ecto.Schema
  import Ecto.Changeset
  alias Obs.Indicators.Serie


  schema "indicators_series" do
    field :data, {:array, :map}
    field :name, :string
    field :type, :string
    field :color, :string

    belongs_to :dataset, Obs.Indicators.Dataset
    timestamps()
  end

  @doc false
  def changeset(%Serie{} = serie, attrs) do
    serie
    |> cast(attrs, [:name, :color, :type, :data])
    |> validate_required([:name, :type, :data])
  end
end
