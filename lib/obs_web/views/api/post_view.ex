defmodule ObsWeb.Api.PostView do
  use ObsWeb, :view
  alias ObsWeb.PostView

  def render("index.json", %{posts: posts}) do
    %{data: render_many(posts, PostView, "posts.json")}
  end

  def render("show.json", %{post: post}) do
    %{data: render_one(post, PostView, "post.json")}
  end

  def render("post.json", %{post: post}) do
    %{id: post.id,
      title: post.title,
      description: post.description,
      file: post.file}
  end
end
