defmodule Obs.Benchmark.Company do
  use Ecto.Schema
  import Ecto.Changeset
  alias Obs.Benchmark.Company


  schema "companies" do
    field :company_name, :string
    field :ticker, :string
    field :web, :string

    belongs_to :category, Obs.Benchmark.Category
    timestamps()
  end

  @doc false
  def changeset(%Company{} = company, attrs) do
    company
    |> cast(attrs, [:company_name, :web,  :category_id, :ticker])
    |> validate_required([:company_name, :category_id])
  end
end
