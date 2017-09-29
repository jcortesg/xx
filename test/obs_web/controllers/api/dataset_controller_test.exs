defmodule ObsWeb.Api.DatasetControllerTest do
  use ObsWeb.ConnCase

  alias Obs.Indicators
  alias Obs.Indicators.Dataset

  @create_attrs %{data: %{}, source: "some source", title: "some title"}
  @update_attrs %{data: %{}, source: "some updated source", title: "some updated title"}
  @invalid_attrs %{data: nil, source: nil, title: nil}

  def fixture(:dataset) do
    {:ok, dataset} = Indicators.create_dataset(@create_attrs)
    dataset
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all datasets", %{conn: conn} do
      conn = get conn, api_dataset_path(conn, :index)
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create dataset" do
    test "renders dataset when data is valid", %{conn: conn} do
      conn = post conn, api_dataset_path(conn, :create), dataset: @create_attrs
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get conn, api_dataset_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "data" => %{},
        "source" => "some source",
        "title" => "some title"}
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post conn, api_dataset_path(conn, :create), dataset: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update dataset" do
    setup [:create_dataset]

    test "renders dataset when data is valid", %{conn: conn, dataset: %Dataset{id: id} = dataset} do
      conn = put conn, api_dataset_path(conn, :update, dataset), dataset: @update_attrs
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get conn, api_dataset_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "data" => %{},
        "source" => "some updated source",
        "title" => "some updated title"}
    end

    test "renders errors when data is invalid", %{conn: conn, dataset: dataset} do
      conn = put conn, api_dataset_path(conn, :update, dataset), dataset: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete dataset" do
    setup [:create_dataset]

    test "deletes chosen dataset", %{conn: conn, dataset: dataset} do
      conn = delete conn, api_dataset_path(conn, :delete, dataset)
      assert response(conn, 204)
      assert_error_sent 404, fn ->
        get conn, api_dataset_path(conn, :show, dataset)
      end
    end
  end

  defp create_dataset(_) do
    dataset = fixture(:dataset)
    {:ok, dataset: dataset}
  end
end
