defmodule Obs.Indicators.Batterie do
  use Ecto.Schema
  import Ecto.Changeset
  alias Obs.Indicators.Batterie


  schema "batteries" do
    field :description, :string
    field :sources, :string
    field :title, :string

    timestamps()
  end

  @doc false
  def changeset(%Batterie{} = batterie, attrs) do
    batterie
    |> cast(attrs, [:title, :description, :sources])
    |> validate_required([:title, :description, :sources])
  end
end
