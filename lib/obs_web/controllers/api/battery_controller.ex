defmodule ObsWeb.Api.BatteryController do
  use ObsWeb, :controller

  alias Obs.Indicators
  alias Obs.Indicators.Battery

  action_fallback ObsWeb.FallbackController

  def index(conn, _params) do
    batteries = Indicators.list_batteries()
    render(conn, "index.json", batteries: batteries)
  end
end
