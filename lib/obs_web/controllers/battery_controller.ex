defmodule ObsWeb.BatteryController do
  use ObsWeb, :controller

  alias Obs.Indicators
  alias Obs.Indicators.Battery

  def index(conn, _params) do
    render(conn, "index.html", batterys: [])
  end
end
