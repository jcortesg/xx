defmodule Obs.Benchmark do
  @moduledoc """
  The Benchmark context.
  """

  import Ecto.Query, warn: false
  alias Obs.Repo

  alias Obs.Benchmark.Category

  @doc """
  Returns the list of categories.

  ## Examples

      iex> list_categories()
      [%Category{}, ...]

  """
  def list_categories do
    Repo.all(Category)
  end

  @doc """
  Gets a single category.

  Raises `Ecto.NoResultsError` if the Category does not exist.

  ## Examples

      iex> get_category!(123)
      %Category{}

      iex> get_category!(456)
      ** (Ecto.NoResultsError)

  """
  def get_category!(id), do: Repo.get!(Category, id)

  @doc """
  Creates a category.

  ## Examples

      iex> create_category(%{field: value})
      {:ok, %Category{}}

      iex> create_category(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_category(attrs \\ %{}) do
    %Category{}
    |> Category.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a category.

  ## Examples

      iex> update_category(category, %{field: new_value})
      {:ok, %Category{}}

      iex> update_category(category, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_category(%Category{} = category, attrs) do
    category
    |> Category.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Category.

  ## Examples

      iex> delete_category(category)
      {:ok, %Category{}}

      iex> delete_category(category)
      {:error, %Ecto.Changeset{}}

  """
  def delete_category(%Category{} = category) do
    Repo.delete(category)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking category changes.

  ## Examples

      iex> change_category(category)
      %Ecto.Changeset{source: %Category{}}

  """
  def change_category(%Category{} = category) do
    Category.changeset(category, %{})
  end

  alias Obs.Benchmark.Company

  @doc """
  Returns the list of companies.

  ## Examples

      iex> list_companies()
      [%Company{}, ...]

  """
  def list_companies do
    Repo.all(Company)
  end

  @doc """
  Gets a single company.

  Raises `Ecto.NoResultsError` if the Company does not exist.

  ## Examples

      iex> get_company!(123)
      %Company{}

      iex> get_company!(456)
      ** (Ecto.NoResultsError)

  """
  def get_company!(id), do: Repo.get!(Company, id)

  @doc """
  Creates a company.

  ## Examples

      iex> create_company(%{field: value})
      {:ok, %Company{}}

      iex> create_company(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_company(attrs \\ %{}) do
    %Company{}
    |> Company.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a company.

  ## Examples

      iex> update_company(company, %{field: new_value})
      {:ok, %Company{}}

      iex> update_company(company, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_company(%Company{} = company, attrs) do
    company
    |> Company.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Company.

  ## Examples

      iex> delete_company(company)
      {:ok, %Company{}}

      iex> delete_company(company)
      {:error, %Ecto.Changeset{}}

  """
  def delete_company(%Company{} = company) do
    Repo.delete(company)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking company changes.

  ## Examples

      iex> change_company(company)
      %Ecto.Changeset{source: %Company{}}

  """
  def change_company(%Company{} = company) do
    Company.changeset(company, %{})
  end

  alias Obs.Benchmark.Datasheet

  @doc """
  Returns the list of datasheets.

  ## Examples

      iex> list_datasheets()
      [%Datasheet{}, ...]

  """
  def list_datasheets do
    Repo.all(Datasheet)
  end

  @doc """
  Gets a single datasheet.

  Raises `Ecto.NoResultsError` if the Datasheet does not exist.

  ## Examples

      iex> get_datasheet!(123)
      %Datasheet{}

      iex> get_datasheet!(456)
      ** (Ecto.NoResultsError)

  """
  def get_datasheet!(id), do: Repo.get!(Datasheet, id)

  @doc """
  Creates a datasheet.

  ## Examples

      iex> create_datasheet(%{field: value})
      {:ok, %Datasheet{}}

      iex> create_datasheet(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_datasheet(attrs \\ %{}) do
    %Datasheet{}
    |> Datasheet.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a datasheet.

  ## Examples

      iex> update_datasheet(datasheet, %{field: new_value})
      {:ok, %Datasheet{}}

      iex> update_datasheet(datasheet, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_datasheet(%Datasheet{} = datasheet, attrs) do
    datasheet
    |> Datasheet.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Datasheet.

  ## Examples

      iex> delete_datasheet(datasheet)
      {:ok, %Datasheet{}}

      iex> delete_datasheet(datasheet)
      {:error, %Ecto.Changeset{}}

  """
  def delete_datasheet(%Datasheet{} = datasheet) do
    Repo.delete(datasheet)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking datasheet changes.

  ## Examples

      iex> change_datasheet(datasheet)
      %Ecto.Changeset{source: %Datasheet{}}

  """
  def change_datasheet(%Datasheet{} = datasheet) do
    Datasheet.changeset(datasheet, %{})
  end
end
