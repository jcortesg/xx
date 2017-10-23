defmodule Obs.Cms do
  @moduledoc """
  The Cms context.
  """

  import Ecto.Query, warn: false
  alias Obs.Repo

  alias Obs.Cms.Post

  @doc """
  Returns the list of studies.

  ## Examples

      iex> list_studies()
      [%Post{}, ...]

  """
  def list_posts do
    Repo.all(Post) |> Repo.preload([:category])
  end

  @doc """
  Gets a single study.

  Raises `Ecto.NoResultsError` if the Post does not exist.

  ## Examples

      iex> get_study!(123)
      %Post{}

      iex> get_study!(456)
      ** (Ecto.NoResultsError)

  """
  def get_post!(id), do: Repo.get!(Post, id)|> Repo.preload([:category])

  @doc """
  Creates a study.

  ## Examples

      iex> create_study(%{field: value})
      {:ok, %Post{}}

      iex> create_study(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_post(attrs \\ %{}) do

    {:ok, post } = %Post{}
    |> Post.changeset(attrs)
    |> Repo.insert()

    if attrs["image"]do
      post
      |> Post.update_image(attrs)
      |> Repo.update
    end

    if attrs["file"]do
      post
      |> Post.upload_file(attrs)
      |> Repo.update
    end
    {:ok, post |> Repo.preload([:category])}
  end

  @doc """
  Updates a study.

  ## Examples

      iex> update_study(study, %{field: new_value})
      {:ok, %Post{}}

      iex> update_study(study, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_post(%Post{} = post, attrs) do
    post
    |> Post.changeset(attrs)
    |> Repo.update!()

    if attrs["image"]do
      post
      |> Post.update_image(attrs)
      |> Repo.update!
    end

    if attrs["file"]do
      post
      |> Post.upload_file(attrs)
      |> Repo.update!
    end
    {:ok, post |> Repo.preload([:category])}
  end

  @doc """
  Deletes a Post.

  ## Examples

      iex> delete_study(study)
      {:ok, %Post{}}

      iex> delete_study(study)
      {:error, %Ecto.Changeset{}}

  """
  def delete_study(%Post{} = study) do
    Repo.delete(study)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking study changes.

  ## Examples

      iex> change_study(study)
      %Ecto.Changeset{source: %Post{}}

  """
  def change_study(%Post{} = study) do
    Post.changeset(study, %{})
  end
end
