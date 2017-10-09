defmodule Obs.Cms.Post do
  use Ecto.Schema
  import Ecto.Changeset
  alias Obs.Cms.Post


  schema "posts" do
    field :description, :string
    field :file, :string
    field :title, :string
    field :image, :string

    timestamps()
  end

  @doc false
  def changeset(%Post{} = study, attrs) do
    study
    |> cast(attrs, [:title, :image, :description, :file])
    |> validate_required([:title, :description ])
  end
end
