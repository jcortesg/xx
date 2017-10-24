defmodule Obs.Cms.Post do
  use Ecto.Schema
  import Ecto.Changeset
  alias Obs.Cms.Post
  use Arc.Ecto.Schema

  schema "posts" do
    field :description, :string
    field :file, Obs.Cms.PostFile.Type
    field :title, :string
    field :type, :string, default: "study"
    field :is_home, :boolean, default: false
    field :image, Obs.Cms.PostImage.Type
    belongs_to :category, Obs.Indicators.Category

    timestamps()
  end

  @doc false
  def changeset(%Post{} = post, attrs) do
    post
    |> cast(attrs, [:title, :is_home, :description, :category_id, :type])
    |> validate_required([:title, :description ])
  end

  def update_image(post, attrs) do
    ext = attrs["image"]["type"]
    file_name= Ecto.UUID.generate
    {:ok, data} =  Base.decode64(attrs["image"]["binary"])
    File.write("tmp/#{file_name}.#{ext}", data, [:binary])

    attrs = Map.put(attrs, "image",
    %Plug.Upload{
      filename: "#{file_name}.#{ext}",
      path: "tmp/#{file_name}.#{ext}"}
    )

    post
    |> cast_attachments(attrs, [:image])
  end

  def upload_file(post, attrs)do
    ext = attrs["file"]["type"]
    file_name= Ecto.UUID.generate
    {:ok, data} =  Base.decode64(attrs["file"]["binary"])
    File.write("uploads/files/#{post.id}_#{file_name}.#{ext}", data, [:binary])

    attrs = Map.put(attrs, "file", "#{post.id}_#{file_name}.#{ext}")

    post
    |> cast(attrs, [:file])
  end
end
