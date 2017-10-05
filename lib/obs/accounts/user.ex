defmodule Obs.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset
  alias Obs.Accounts.User


  schema "users" do
    field :email, :string
    field :hash_password, :string
    field :name, :string

    timestamps()
  end

  @doc false
  def changeset(%User{} = user, attrs) do
    user
    |> cast(attrs, [:name, :email, :hash_password])
    |> validate_required([:name, :email, :hash_password])
  end
end
