defmodule ObsWeb.BenchmarkController do
  use ObsWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
