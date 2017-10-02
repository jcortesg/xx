defmodule ObsWeb.BatteryController do
  use ObsWeb, :controller

  alias Obs.Indicators
  alias Obs.Indicators.Battery

  def index(conn, _params) do
    render(conn, "index.html", batterys: [])
  end

  def new(conn, _params) do
    changeset = Indicators.change_battery(%Battery{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"battery" => battery_params}) do
    case Indicators.create_battery(battery_params) do
      {:ok, battery} ->
        conn
        |> put_flash(:info, "Battery created successfully.")
        |> redirect(to: battery_path(conn, :show, battery))
      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    battery = Indicators.get_battery!(id)
    render(conn, "show.html", battery: battery)
  end

  def edit(conn, %{"id" => id}) do
    battery = Indicators.get_battery!(id)
    changeset = Indicators.change_battery(battery)
    render(conn, "edit.html", battery: battery, changeset: changeset)
  end

  def update(conn, %{"id" => id, "battery" => battery_params}) do
    battery = Indicators.get_battery!(id)

    case Indicators.update_battery(battery, battery_params) do
      {:ok, battery} ->
        conn
        |> put_flash(:info, "Battery updated successfully.")
        |> redirect(to: battery_path(conn, :show, battery))
      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html", battery: battery, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    battery = Indicators.get_battery!(id)
    {:ok, _battery} = Indicators.delete_battery(battery)

    conn
    |> put_flash(:info, "Battery deleted successfully.")
    |> redirect(to: battery_path(conn, :index))
  end
end
