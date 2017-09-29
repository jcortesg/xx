defmodule Obs.Indicators.Category do
  use Ecto.Schema
  import Ecto.Changeset
  alias Obs.Indicators.Category


  schema "indicator_categories" do
    field :name, :string

    timestamps()
  end

  @doc false
  def changeset(%Category{} = category, attrs) do
    category
    |> cast(attrs, [:name])
    |> validate_required([:name])
    |> unique_constraint(:name)
  end
end
