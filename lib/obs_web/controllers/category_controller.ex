defmodule ObsWeb.CategoryController do
  use ObsWeb, :controller

  alias Obs.Benchmark
  alias Obs.Benchmark.Category

  action_fallback ObsWeb.FallbackController

  def index(conn, _params) do
    categories = Benchmark.list_categories()
    render(conn, "index.json", categories: categories)
  end

  def create(conn, %{"category" => category_params}) do
    with {:ok, %Category{} = category} <- Benchmark.create_category(category_params) do
      conn
      |> put_status(:created)
      |> render("show.json", category: category)
    end
  end

  def show(conn, %{"id" => id}) do
    category = Benchmark.get_category!(id)
    render(conn, "show.json", category: category)
  end

  def update(conn, %{"id" => id, "category" => category_params}) do
    category = Benchmark.get_category!(id)

    with {:ok, %Category{} = category} <- Benchmark.update_category(category, category_params) do
      render(conn, "show.json", category: category)
    end
  end

  def delete(conn, %{"id" => id}) do
    category = Benchmark.get_category!(id)
    with {:ok, %Category{}} <- Benchmark.delete_category(category) do
      send_resp(conn, :no_content, "")
    end
  end
end
