defmodule ObsWeb.StudyControllerTest do
  use ObsWeb.ConnCase

  alias Obs.Cms
  alias Obs.Cms.Study

  @create_attrs %{description: "some description", file: "some file", title: "some title"}
  @update_attrs %{description: "some updated description", file: "some updated file", title: "some updated title"}
  @invalid_attrs %{description: nil, file: nil, title: nil}

  def fixture(:study) do
    {:ok, study} = Cms.create_study(@create_attrs)
    study
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all studies", %{conn: conn} do
      conn = get conn, study_path(conn, :index)
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create study" do
    test "renders study when data is valid", %{conn: conn} do
      conn = post conn, study_path(conn, :create), study: @create_attrs
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get conn, study_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "description" => "some description",
        "file" => "some file",
        "title" => "some title"}
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post conn, study_path(conn, :create), study: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update study" do
    setup [:create_study]

    test "renders study when data is valid", %{conn: conn, study: %Study{id: id} = study} do
      conn = put conn, study_path(conn, :update, study), study: @update_attrs
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get conn, study_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "description" => "some updated description",
        "file" => "some updated file",
        "title" => "some updated title"}
    end

    test "renders errors when data is invalid", %{conn: conn, study: study} do
      conn = put conn, study_path(conn, :update, study), study: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete study" do
    setup [:create_study]

    test "deletes chosen study", %{conn: conn, study: study} do
      conn = delete conn, study_path(conn, :delete, study)
      assert response(conn, 204)
      assert_error_sent 404, fn ->
        get conn, study_path(conn, :show, study)
      end
    end
  end

  defp create_study(_) do
    study = fixture(:study)
    {:ok, study: study}
  end
end
