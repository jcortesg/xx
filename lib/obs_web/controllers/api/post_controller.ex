defmodule ObsWeb.Api.PostController do
  use ObsWeb, :controller

  alias Obs.Cms
  alias Obs.Cms.Post

  action_fallback ObsWeb.FallbackController

  def index(conn, params) do
    posts = Cms.list_posts()
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
    study = Cms.get_study!(id)

    with {:ok, %Post{} = study} <- Cms.update_study(study, study_params) do
      render(conn, "show.json", study: study)
    end
  end

  def delete(conn, %{"id" => id}) do
    study = Cms.get_study!(id)
    with {:ok, %Post{}} <- Cms.delete_study(study) do
      send_resp(conn, :no_content, "")
    end
  end
end
