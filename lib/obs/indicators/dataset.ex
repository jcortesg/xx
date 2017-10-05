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

    has_many :series, Obs.Indicators.Serie
    belongs_to :battery, Obs.Indicators.Battery
    timestamps()
  end

  @doc false
  def changeset(%Dataset{} = dataset, attrs) do
    dataset
    |> cast(attrs, [:title, :source, :battery_id, :description, :type, :periodicity, :measurement_unit, :x_type])
    |> validate_required([:title,:battery_id, :source, :type])
    |> assoc_constraint(:battery)
  end
end
