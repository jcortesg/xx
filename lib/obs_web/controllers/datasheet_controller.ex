defmodule ObsWeb.DatasheetController do
  use ObsWeb, :controller

  alias Obs.Benchmark
  alias Obs.Benchmark.Datasheet

  action_fallback ObsWeb.FallbackController

  def index(conn, _params) do
    datasheets = Benchmark.list_datasheets()
    render(conn, "index.json", datasheets: datasheets)
  end

  def create(conn, %{"datasheet" => datasheet_params}) do
    with {:ok, %Datasheet{} = datasheet} <- Benchmark.create_datasheet(datasheet_params) do
      conn
      |> put_status(:created)
      |> render("show.json", datasheet: datasheet)
    end
  end

  def show(conn, %{"id" => id}) do
    datasheet = Benchmark.get_datasheet!(id)
    render(conn, "show.json", datasheet: datasheet)
  end

  def update(conn, %{"id" => id, "datasheet" => datasheet_params}) do
    datasheet = Benchmark.get_datasheet!(id)

    with {:ok, %Datasheet{} = datasheet} <- Benchmark.update_datasheet(datasheet, datasheet_params) do
      render(conn, "show.json", datasheet: datasheet)
    end
  end

  def delete(conn, %{"id" => id}) do
    datasheet = Benchmark.get_datasheet!(id)
    with {:ok, %Datasheet{}} <- Benchmark.delete_datasheet(datasheet) do
      send_resp(conn, :no_content, "")
    end
  end
end
