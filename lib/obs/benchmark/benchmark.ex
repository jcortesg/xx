defmodule Obs.Benchmark do
  @moduledoc """
  The Benchmark context.
  """

  import Ecto.Query, warn: false
  alias Obs.Repo

  alias Obs.Benchmark.Category
  alias Obs.Benchmark.Company
  alias Obs.Benchmark.Datasheet
  alias Obs.Benchmark.Ratios

  def create_ratios do
    companies =
      Datasheet
      |> Repo.all
      |> Enum.each(fn(data) ->
      Ratios.calculate(data)
    end)
  end

  def list_categories do
    Repo.all(Category)
  end

  def get_category!(id), do: Repo.get!(Category, id)

  def create_category(attrs \\ %{}) do
    %Category{}
    |> Category.changeset(attrs)
    |> Repo.insert()
  end

  def update_category(%Category{} = category, attrs) do
    category
    |> Category.changeset(attrs)
    |> Repo.update()
  end

  def delete_category(%Category{} = category) do
    Repo.delete(category)
  end

  def change_category(%Category{} = category) do
    Category.changeset(category, %{})
  end


  def list_companies do
    Repo.all(Company)
  end

  def get_company!(id), do: Repo.get!(Company, id)

  def create_company(attrs \\ %{}) do
    %Company{}
    |> Company.changeset(attrs)
    |> Repo.insert()
  end

  def update_company(%Company{} = company, attrs) do
    company
    |> Company.changeset(attrs)
    |> Repo.update()
  end

  def delete_company(%Company{} = company) do
    Repo.delete(company)
  end

  def change_company(%Company{} = company) do
    Company.changeset(company, %{})
  end

  alias Obs.Benchmark.Datasheet

  def list_datasheets do
    Repo.all(Datasheet)
  end

  def get_datasheet!(id), do: Repo.get!(Datasheet, id)

  def create_datasheet(attrs \\ %{}) do
    %Datasheet{}
    |> Datasheet.changeset(attrs)
    |> Repo.insert()
  end

  def update_datasheet(%Datasheet{} = datasheet, attrs) do
    datasheet
    |> Datasheet.changeset(attrs)
    |> Repo.update()
  end

  def delete_datasheet(%Datasheet{} = datasheet) do
    Repo.delete(datasheet)
  end

  def change_datasheet(%Datasheet{} = datasheet) do
    Datasheet.changeset(datasheet, %{})
  end
end
