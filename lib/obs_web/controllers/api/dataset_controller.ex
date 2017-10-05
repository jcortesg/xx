defmodule ObsWeb.Api.DatasetController do
  use ObsWeb, :controller

  alias Obs.Indicators
  alias Obs.Indicators.Dataset

  action_fallback ObsWeb.FallbackController

  def index(conn, _params) do
    datasets = Indicators.list_datasets()
    render(conn, "index.json", datasets: datasets)
  end

  def create(conn, %{"dataset" => dataset_params, "battery_id" => battery}) do
    with {:ok, %Dataset{} = dataset} <- Indicators.create_dataset(
           dataset_params |> Map.put("battery_id", battery)
         ) do
      conn
      |> put_status(:created)
      |> render("show.json", dataset: dataset)
    end
  end

  def show(conn, %{"id" => id}) do
    dataset = Indicators.get_dataset!(id)
    render(conn, "show.json", dataset: dataset)
  end

  def update(conn, %{"id" => id, "dataset" => dataset_params}) do
    dataset = Indicators.get_dataset!(id)

    with {:ok, %Dataset{} = dataset} <- Indicators.update_dataset(dataset, dataset_params) do
      render(conn, "show.json", dataset: dataset)
    end
  end

  def delete(conn, %{"id" => id}) do
    dataset = Indicators.get_dataset!(id)
    with {:ok, %Dataset{}} <- Indicators.delete_dataset(dataset) do
      send_resp(conn, :no_content, "")
    end
  end
end
