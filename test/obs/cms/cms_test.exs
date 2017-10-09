defmodule Obs.CmsTest do
  use Obs.DataCase

  alias Obs.Cms

  describe "studies" do
    alias Obs.Cms.Study

    @valid_attrs %{description: "some description", file: "some file", title: "some title"}
    @update_attrs %{description: "some updated description", file: "some updated file", title: "some updated title"}
    @invalid_attrs %{description: nil, file: nil, title: nil}

    def study_fixture(attrs \\ %{}) do
      {:ok, study} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Cms.create_study()

      study
    end

    test "list_studies/0 returns all studies" do
      study = study_fixture()
      assert Cms.list_studies() == [study]
    end

    test "get_study!/1 returns the study with given id" do
      study = study_fixture()
      assert Cms.get_study!(study.id) == study
    end

    test "create_study/1 with valid data creates a study" do
      assert {:ok, %Study{} = study} = Cms.create_study(@valid_attrs)
      assert study.description == "some description"
      assert study.file == "some file"
      assert study.title == "some title"
    end

    test "create_study/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Cms.create_study(@invalid_attrs)
    end

    test "update_study/2 with valid data updates the study" do
      study = study_fixture()
      assert {:ok, study} = Cms.update_study(study, @update_attrs)
      assert %Study{} = study
      assert study.description == "some updated description"
      assert study.file == "some updated file"
      assert study.title == "some updated title"
    end

    test "update_study/2 with invalid data returns error changeset" do
      study = study_fixture()
      assert {:error, %Ecto.Changeset{}} = Cms.update_study(study, @invalid_attrs)
      assert study == Cms.get_study!(study.id)
    end

    test "delete_study/1 deletes the study" do
      study = study_fixture()
      assert {:ok, %Study{}} = Cms.delete_study(study)
      assert_raise Ecto.NoResultsError, fn -> Cms.get_study!(study.id) end
    end

    test "change_study/1 returns a study changeset" do
      study = study_fixture()
      assert %Ecto.Changeset{} = Cms.change_study(study)
    end
  end
end
