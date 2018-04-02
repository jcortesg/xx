defmodule ObsWeb.Api.PostController do
  use ObsWeb, :controller

  alias Obs.Cms
  alias Obs.Cms.Post
  import Ecto.Query

  action_fallback ObsWeb.FallbackController

  def index(conn, params) do
    filtered_params =
    params
    |> Map.take(~w(is_home category_id type))
    |> Enum.map(fn {k, v} -> {String.to_atom(k), v} end)

    query = from(Post, where: ^filtered_params)
    posts=
      query
      |> Obs.Repo.all
      |> Obs.Repo.preload([:category])

    render(conn, "index.json", posts: posts)
  end

  def create(conn, %{"post" => post_params}) do
    with {:ok, %Post{} = post} <- Cms.create_post(post_params) do
      conn
      |> put_status(:created)
      |> render("show.json", post: post)
    end
  end

  def show(conn, %{"id" => id}) do
    post = Cms.get_post!(id)
    render(conn, "show.json", post: post)
  end

  def update(conn, %{"id" => id, "study" => study_params}) do
    study = Cms.get_post!(id)

    with {:ok, %Post{} = study} <- Cms.update_post(study, study_params) do
      render(conn, "show.json", post: study)
    end
  end

  def delete(conn, %{"id" => id}) do
    study = Cms.get_post!(id)
    with {:ok, %Post{}} <- Cms.delete_post(study) do
      send_resp(conn, :no_content, "")
    end
  end
end
