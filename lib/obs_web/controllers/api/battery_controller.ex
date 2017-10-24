defmodule ObsWeb.Api.BatteryController do
  use ObsWeb, :controller

  alias Obs.Indicators
  alias Obs.Indicators.Battery
  import Ecto.Query

  action_fallback ObsWeb.FallbackController

  def index(conn, params) do
    filtered_params =
      params
      |> Map.take(~w(category_id))
      |> Enum.map(fn {k, v} -> {String.to_atom(k), v} end)

    query = from(Battery, where: ^filtered_params)
    batteries=
      query
      |> Obs.Repo.all
      |> Obs.Repo.preload([:category])

    render(conn, "index.json", batteries: batteries)
  end

  def show(conn, %{"id" => id}) do
    battery = Indicators.get_battery!(id)
    render(conn, "show.json", battery: battery)
  end

  def create(conn, %{"battery" => battery_params}) do
    with {:ok, %Battery{} = battery} <- Indicators.create_battery(battery_params) do
      battery = Indicators.get_battery!(battery.id)
      conn
      |> put_status(:created)
      |> render("show.json", battery: battery)
    end
  end
  def delete(conn, %{"id" => id}) do
    battery = Indicators.get_battery!(id)
    with {:ok, %Battery{}} <- Indicators.delete_battery(battery) do
      send_resp(conn, :no_content, "")
    end
  end
end
