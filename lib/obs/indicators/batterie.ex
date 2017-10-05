defmodule Obs.Indicators.Battery do
  use Ecto.Schema
  import Ecto.Changeset
  alias Obs.Indicators.Battery


  schema "batteries" do
    field :description, :string
    field :sources, :string
    field :title, :string

    has_many :datasets, Obs.Indicators.Dataset
    timestamps()
  end

  @doc false
  def changeset(%Battery{} = battery, attrs) do
    battery
    |> cast(attrs, [:title, :description, :sources])
    |> validate_required([:title, :description, :sources])
  end
end
