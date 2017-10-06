defmodule ObsWeb.PageController do
  use ObsWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end

  def studies(conn, _params) do
    render conn, "studies.html"
  end
end
