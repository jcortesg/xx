defmodule Obs.Benchmark.Company do
  use Ecto.Schema
  import Ecto.Changeset
  alias Obs.Benchmark.Company


  schema "companies" do
    field :category_id, :string
    field :name, :string

    timestamps()
  end

  @doc false
  def changeset(%Company{} = company, attrs) do
    company
    |> cast(attrs, [:name, :category_id])
    |> validate_required([:name, :category_id])
  end
end
