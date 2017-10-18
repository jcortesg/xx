defmodule ObsWeb.Api.RatiosController do
  use ObsWeb, :controller

  alias Obs.Benchmark

  def index(conn, _params) do
    ratios = Benchmark.percentil_ratios
    render conn, "index.json", ratios: ratios
  end
end
