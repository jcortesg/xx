defmodule ObsWeb.Api.PostView do
  use ObsWeb, :view
  alias ObsWeb.Api.PostView
  alias Obs.Cms.PostImage

  def render("index.json", %{posts: posts}) do
    %{data: render_many(posts, PostView, "post.json")}
  end

  def render("show.json", %{post: post}) do
    %{data: render_one(post, PostView, "post.json")}
  end

  def render("post.json", %{post: post}) do
    %{id: post.id,
      title: post.title,
      description: post.description,
      image: PostImage.url({post.image, %{id: post.id}}),
      category: render_one(post.category, ObsWeb.Api.CategoryView, "category.json"),
      type: post.type,
      is_home: post.is_home,
      file: post.file}
  end
end
