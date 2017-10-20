defmodule Obs.Indicators do
  @moduledoc """
  The Indicators context.
  """

  import Ecto.Query, warn: false
  alias Obs.Repo

  alias Obs.Indicators.{Battery,Serie, Category}

  def list_categories(params) do
    filtered_params =
      params
      |> Map.take(~w(type))
      |> Enum.map(fn {k, v} -> {String.to_atom(k), v} end)

    from(Category, where: ^filtered_params)
    |> Repo.all
  end

  def list_batteries do
    Repo.all(Battery)
  end

  def get_battery!(id) do
    Battery
    |> where([battery], battery.id == ^id)
    |> join(:left, [battery], datasets in assoc(battery, :datasets))
    |> join(:left, [battery, datasets], series in assoc(datasets, :series))
    |> join(:left, [battery], category in assoc(battery, :category))
    |> preload([battery, datasets, series, category], [datasets: {datasets, series: series}, category: category])
    |> Repo.one
  end

  def create_battery(attrs \\ %{}) do
    %Battery{}
    |> Battery.changeset(attrs)
    |> Repo.insert()
  end

  def update_battery(%Battery{} = battery, attrs) do
    battery
    |> Battery.changeset(attrs)
    |> Repo.update()
  end

  def delete_battery(%Battery{} = battery) do
    Repo.delete(battery)
  end

  def change_battery(%Battery{} = battery) do
    Battery.changeset(battery, %{})
  end

  alias Obs.Indicators.Dataset

  def list_datasets do
    Repo.all(Dataset)
  end

  def get_dataset!(id), do: Repo.get!(Dataset, id)

  def create_dataset(attrs \\ %{}) do
    changeset = Dataset.changeset(%Dataset{},attrs)
    Repo.transaction fn ->
      dataset = Repo.insert!(changeset)

      Enum.map(attrs["series"], fn(item) ->
        %Serie{}
        |>Serie.changeset(item)
        |>Ecto.Changeset.put_assoc(:dataset, dataset)
        |>Repo.insert!()
      end)
      dataset |> Repo.preload(:series)
    end
  end

  def update_dataset(%Dataset{} = dataset, attrs) do
    dataset
    |> Dataset.changeset(attrs)
    |> Repo.update()
  end

  def delete_dataset(%Dataset{} = dataset) do
    Repo.delete(dataset)
  end

  def change_dataset(%Dataset{} = dataset) do
    Dataset.changeset(dataset, %{})
  end
end
