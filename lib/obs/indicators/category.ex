defmodule Obs.Indicators.Category do
  use Ecto.Schema
  import Ecto.Changeset
  alias Obs.Indicators.Category


  schema "indicator_categories" do
    field :name, :string
    field :type, :string

    has_many :batteries, Obs.Indicators.Battery
    timestamps()
  end

  @doc false
  def changeset(%Category{} = category, attrs) do
    category
    |> cast(attrs, [:name, :type])
    |> validate_required([:name])
    |> unique_constraint(:name)
  end
end
