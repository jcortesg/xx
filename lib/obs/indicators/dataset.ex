defmodule Obs.Indicators.Dataset do
  use Ecto.Schema
  import Ecto.Changeset
  alias Obs.Indicators.Dataset


  schema "datasets" do
    field :source, :string
    field :title, :string
    field :description, :string
    field :type, :string
    field :periodicity, :string
    field :measurement_unit, :string
    field :x_type, :string
    field :series_type, :string
    field :batterie_id, :id

    timestamps()
  end

  @doc false
  def changeset(%Dataset{} = dataset, attrs) do
    dataset
    |> cast(attrs, [:title, :source, :data, :description, :type, :periodicity, :measurement_unit, :x_type, :serie_type ])
    |> validate_required([:title, :source, :data, :type])
  end
end
