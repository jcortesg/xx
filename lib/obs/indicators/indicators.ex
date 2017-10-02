defmodule Obs.Indicators do
  @moduledoc """
  The Indicators context.
  """

  import Ecto.Query, warn: false
  alias Obs.Repo

  alias Obs.Indicators.Battery

  @doc """
  Returns the list of batteries.

  ## Examples

      iex> list_batteries()
      [%Batterie{}, ...]

  """
  def list_batteries do
    Repo.all(Battery)
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
  def get_battery!(id), do: Repo.get!(Battery, id)

  @doc """
  Creates a batterie.

  ## Examples

      iex> create_batterie(%{field: value})
      {:ok, %Batterie{}}

      iex> create_batterie(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_battery(attrs \\ %{}) do
    %Battery{}
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
  def update_battery(%Battery{} = battery, attrs) do
    battery
    |> Battery.changeset(attrs)
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
  def delete_battery(%Battery{} = battery) do
    Repo.delete(battery)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking batterie changes.

  ## Examples

      iex> change_batterie(batterie)
      %Ecto.Changeset{source: %Batterie{}}

  """
  def change_battery(%Battery{} = battery) do
    Battery.changeset(battery, %{})
  end

  alias Obs.Indicators.Dataset

  @doc """
  Returns the list of datasets.

  ## Examples

      iex> list_datasets()
      [%Dataset{}, ...]

  """
  def list_datasets do
    Repo.all(Dataset)
  end

  @doc """
  Gets a single dataset.

  Raises `Ecto.NoResultsError` if the Dataset does not exist.

  ## Examples

      iex> get_dataset!(123)
      %Dataset{}

      iex> get_dataset!(456)
      ** (Ecto.NoResultsError)

  """
  def get_dataset!(id), do: Repo.get!(Dataset, id)

  @doc """
  Creates a dataset.

  ## Examples

      iex> create_dataset(%{field: value})
      {:ok, %Dataset{}}

      iex> create_dataset(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_dataset(attrs \\ %{}) do
    %Dataset{}
    |> Dataset.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a dataset.

  ## Examples

      iex> update_dataset(dataset, %{field: new_value})
      {:ok, %Dataset{}}

      iex> update_dataset(dataset, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_dataset(%Dataset{} = dataset, attrs) do
    dataset
    |> Dataset.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Dataset.

  ## Examples

      iex> delete_dataset(dataset)
      {:ok, %Dataset{}}

      iex> delete_dataset(dataset)
      {:error, %Ecto.Changeset{}}

  """
  def delete_dataset(%Dataset{} = dataset) do
    Repo.delete(dataset)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking dataset changes.

  ## Examples

      iex> change_dataset(dataset)
      %Ecto.Changeset{source: %Dataset{}}

  """
  def change_dataset(%Dataset{} = dataset) do
    Dataset.changeset(dataset, %{})
  end
end
