defmodule ObsWeb.Api.CategoryController do
  use ObsWeb, :controller

  alias Obs.Indicators
  alias Obs.Indicators.Category

  action_fallback ObsWeb.FallbackController

  def index(conn, params) do
    categories = Indicators.list_categories()
    render(conn, "index.json", categories: categories)
  end
end
