defmodule Obs.Indicators do
  @moduledoc """
  The Indicators context.
  """

  import Ecto.Query, warn: false
  alias Obs.Repo

  alias Obs.Indicators.Batterie

  @doc """
  Returns the list of batteries.

  ## Examples

      iex> list_batteries()
      [%Batterie{}, ...]

  """
  def list_batteries do
    Repo.all(Batterie)
  end

  @doc """
  Gets a single batterie.

  Raises `Ecto.NoResultsError` if the Batterie does not exist.

  ## Examples

      iex> get_batterie!(123)
      %Batterie{}

      iex> get_batterie!(456)
      ** (Ecto.NoResultsError)

  """
  def get_batterie!(id), do: Repo.get!(Batterie, id)

  @doc """
  Creates a batterie.

  ## Examples

      iex> create_batterie(%{field: value})
      {:ok, %Batterie{}}

      iex> create_batterie(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_batterie(attrs \\ %{}) do
    %Batterie{}
    |> Batterie.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a batterie.

  ## Examples

      iex> update_batterie(batterie, %{field: new_value})
      {:ok, %Batterie{}}

      iex> update_batterie(batterie, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_batterie(%Batterie{} = batterie, attrs) do
    batterie
    |> Batterie.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Batterie.

  ## Examples

      iex> delete_batterie(batterie)
      {:ok, %Batterie{}}

      iex> delete_batterie(batterie)
      {:error, %Ecto.Changeset{}}

  """
  def delete_batterie(%Batterie{} = batterie) do
    Repo.delete(batterie)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking batterie changes.

  ## Examples

      iex> change_batterie(batterie)
      %Ecto.Changeset{source: %Batterie{}}

  """
  def change_batterie(%Batterie{} = batterie) do
    Batterie.changeset(batterie, %{})
  end
end
