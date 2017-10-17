defmodule ObsWeb.PageController do
  use ObsWeb, :controller

  def index(conn, _params) do
    conn
    |> put_layout("home.html")
    |> render "index.html"
  end

  def studies(conn, _params) do
    render conn, "studies.html"
  end
end
