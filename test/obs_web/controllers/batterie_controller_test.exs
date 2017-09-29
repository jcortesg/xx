defmodule ObsWeb.BatterieControllerTest do
  use ObsWeb.ConnCase

  alias Obs.Indicators

  @create_attrs %{description: "some description", sources: "some sources", title: "some title"}
  @update_attrs %{description: "some updated description", sources: "some updated sources", title: "some updated title"}
  @invalid_attrs %{description: nil, sources: nil, title: nil}

  def fixture(:batterie) do
    {:ok, batterie} = Indicators.create_batterie(@create_attrs)
    batterie
  end

  describe "index" do
    test "lists all batteries", %{conn: conn} do
      conn = get conn, batterie_path(conn, :index)
      assert html_response(conn, 200) =~ "Listing Batteries"
    end
  end

  describe "new batterie" do
    test "renders form", %{conn: conn} do
      conn = get conn, batterie_path(conn, :new)
      assert html_response(conn, 200) =~ "New Batterie"
    end
  end

  describe "create batterie" do
    test "redirects to show when data is valid", %{conn: conn} do
      conn = post conn, batterie_path(conn, :create), batterie: @create_attrs

      assert %{id: id} = redirected_params(conn)
      assert redirected_to(conn) == batterie_path(conn, :show, id)

      conn = get conn, batterie_path(conn, :show, id)
      assert html_response(conn, 200) =~ "Show Batterie"
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post conn, batterie_path(conn, :create), batterie: @invalid_attrs
      assert html_response(conn, 200) =~ "New Batterie"
    end
  end

  describe "edit batterie" do
    setup [:create_batterie]

    test "renders form for editing chosen batterie", %{conn: conn, batterie: batterie} do
      conn = get conn, batterie_path(conn, :edit, batterie)
      assert html_response(conn, 200) =~ "Edit Batterie"
    end
  end

  describe "update batterie" do
    setup [:create_batterie]

    test "redirects when data is valid", %{conn: conn, batterie: batterie} do
      conn = put conn, batterie_path(conn, :update, batterie), batterie: @update_attrs
      assert redirected_to(conn) == batterie_path(conn, :show, batterie)

      conn = get conn, batterie_path(conn, :show, batterie)
      assert html_response(conn, 200) =~ "some updated description"
    end

    test "renders errors when data is invalid", %{conn: conn, batterie: batterie} do
      conn = put conn, batterie_path(conn, :update, batterie), batterie: @invalid_attrs
      assert html_response(conn, 200) =~ "Edit Batterie"
    end
  end

  describe "delete batterie" do
    setup [:create_batterie]

    test "deletes chosen batterie", %{conn: conn, batterie: batterie} do
      conn = delete conn, batterie_path(conn, :delete, batterie)
      assert redirected_to(conn) == batterie_path(conn, :index)
      assert_error_sent 404, fn ->
        get conn, batterie_path(conn, :show, batterie)
      end
    end
  end

  defp create_batterie(_) do
    batterie = fixture(:batterie)
    {:ok, batterie: batterie}
  end
end
