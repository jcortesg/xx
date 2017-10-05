defmodule ObsWeb.FallbackController do
  @moduledoc """
  Translates controller action results into valid `Plug.Conn` responses.

  See `Phoenix.Controller.action_fallback/1` for more details.
  """
  use ObsWeb, :controller

  def call(conn, {:error, %Ecto.Changeset{} = changeset}) do
    IO.inspect changeset
    conn
    |> put_status(:unprocessable_entity)
    |> render(ObsWeb.ChangesetView, "error.json", changeset: changeset)
  end

  def call(conn, {:error, :not_found}) do
    conn
    |> put_status(:not_found)
    |> render(ObsWeb.ErrorView, :"404")
  end
end
