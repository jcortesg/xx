defmodule Obs.Indicators.Dataset do
  use Ecto.Schema
  import Ecto.Changeset
  alias Obs.Indicators.Dataset


  schema "datasets" do
    field :data, :map
    field :source, :string
    field :title, :string
    field :batterie_id, :id

    timestamps()
  end

  @doc false
  def changeset(%Dataset{} = dataset, attrs) do
    dataset
    |> cast(attrs, [:title, :source, :data])
    |> validate_required([:title, :source, :data])
  end
end
