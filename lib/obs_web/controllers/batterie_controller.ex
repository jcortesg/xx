defmodule ObsWeb.BatterieController do
  use ObsWeb, :controller

  alias Obs.Indicators
  alias Obs.Indicators.Batterie

  def index(conn, _params) do
    batteries = Indicators.list_batteries()
    render(conn, "index.html", batteries: batteries)
  end

  def new(conn, _params) do
    changeset = Indicators.change_batterie(%Batterie{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"batterie" => batterie_params}) do
    case Indicators.create_batterie(batterie_params) do
      {:ok, batterie} ->
        conn
        |> put_flash(:info, "Batterie created successfully.")
        |> redirect(to: batterie_path(conn, :show, batterie))
      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    batterie = Indicators.get_batterie!(id)
    render(conn, "show.html", batterie: batterie)
  end

  def edit(conn, %{"id" => id}) do
    batterie = Indicators.get_batterie!(id)
    changeset = Indicators.change_batterie(batterie)
    render(conn, "edit.html", batterie: batterie, changeset: changeset)
  end

  def update(conn, %{"id" => id, "batterie" => batterie_params}) do
    batterie = Indicators.get_batterie!(id)

    case Indicators.update_batterie(batterie, batterie_params) do
      {:ok, batterie} ->
        conn
        |> put_flash(:info, "Batterie updated successfully.")
        |> redirect(to: batterie_path(conn, :show, batterie))
      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html", batterie: batterie, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    batterie = Indicators.get_batterie!(id)
    {:ok, _batterie} = Indicators.delete_batterie(batterie)

    conn
    |> put_flash(:info, "Batterie deleted successfully.")
    |> redirect(to: batterie_path(conn, :index))
  end
end
