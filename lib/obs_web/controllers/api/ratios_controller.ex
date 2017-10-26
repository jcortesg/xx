defmodule ObsWeb.Api.RatiosController do
  use ObsWeb, :controller

  alias Obs.Benchmark

  def index(conn, params) do
    ratios = Benchmark.percentil_ratios(params)
    IO.inspect ratios
    render conn, "index.json", ratios: ratios
  end
end
