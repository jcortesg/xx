defmodule Obs.IndicatorsTest do
  use Obs.DataCase

  alias Obs.Indicators

  describe "batteries" do
    alias Obs.Indicators.Batterie

    @valid_attrs %{description: "some description", sources: "some sources", title: "some title"}
    @update_attrs %{description: "some updated description", sources: "some updated sources", title: "some updated title"}
    @invalid_attrs %{description: nil, sources: nil, title: nil}

    def batterie_fixture(attrs \\ %{}) do
      {:ok, batterie} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Indicators.create_batterie()

      batterie
    end

    test "list_batteries/0 returns all batteries" do
      batterie = batterie_fixture()
      assert Indicators.list_batteries() == [batterie]
    end

    test "get_batterie!/1 returns the batterie with given id" do
      batterie = batterie_fixture()
      assert Indicators.get_batterie!(batterie.id) == batterie
    end

    test "create_batterie/1 with valid data creates a batterie" do
      assert {:ok, %Batterie{} = batterie} = Indicators.create_batterie(@valid_attrs)
      assert batterie.description == "some description"
      assert batterie.sources == "some sources"
      assert batterie.title == "some title"
    end

    test "create_batterie/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Indicators.create_batterie(@invalid_attrs)
    end

    test "update_batterie/2 with valid data updates the batterie" do
      batterie = batterie_fixture()
      assert {:ok, batterie} = Indicators.update_batterie(batterie, @update_attrs)
      assert %Batterie{} = batterie
      assert batterie.description == "some updated description"
      assert batterie.sources == "some updated sources"
      assert batterie.title == "some updated title"
    end

    test "update_batterie/2 with invalid data returns error changeset" do
      batterie = batterie_fixture()
      assert {:error, %Ecto.Changeset{}} = Indicators.update_batterie(batterie, @invalid_attrs)
      assert batterie == Indicators.get_batterie!(batterie.id)
    end

    test "delete_batterie/1 deletes the batterie" do
      batterie = batterie_fixture()
      assert {:ok, %Batterie{}} = Indicators.delete_batterie(batterie)
      assert_raise Ecto.NoResultsError, fn -> Indicators.get_batterie!(batterie.id) end
    end

    test "change_batterie/1 returns a batterie changeset" do
      batterie = batterie_fixture()
      assert %Ecto.Changeset{} = Indicators.change_batterie(batterie)
    end
  end

  describe "datasets" do
    alias Obs.Indicators.Dataset

    @valid_attrs %{data: %{}, source: "some source", title: "some title"}
    @update_attrs %{data: %{}, source: "some updated source", title: "some updated title"}
    @invalid_attrs %{data: nil, source: nil, title: nil}

    def dataset_fixture(attrs \\ %{}) do
      {:ok, dataset} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Indicators.create_dataset()

      dataset
    end

    test "list_datasets/0 returns all datasets" do
      dataset = dataset_fixture()
      assert Indicators.list_datasets() == [dataset]
    end

    test "get_dataset!/1 returns the dataset with given id" do
      dataset = dataset_fixture()
      assert Indicators.get_dataset!(dataset.id) == dataset
    end

    test "create_dataset/1 with valid data creates a dataset" do
      assert {:ok, %Dataset{} = dataset} = Indicators.create_dataset(@valid_attrs)
      assert dataset.data == %{}
      assert dataset.source == "some source"
      assert dataset.title == "some title"
    end

    test "create_dataset/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Indicators.create_dataset(@invalid_attrs)
    end

    test "update_dataset/2 with valid data updates the dataset" do
      dataset = dataset_fixture()
      assert {:ok, dataset} = Indicators.update_dataset(dataset, @update_attrs)
      assert %Dataset{} = dataset
      assert dataset.data == %{}
      assert dataset.source == "some updated source"
      assert dataset.title == "some updated title"
    end

    test "update_dataset/2 with invalid data returns error changeset" do
      dataset = dataset_fixture()
      assert {:error, %Ecto.Changeset{}} = Indicators.update_dataset(dataset, @invalid_attrs)
      assert dataset == Indicators.get_dataset!(dataset.id)
    end

    test "delete_dataset/1 deletes the dataset" do
      dataset = dataset_fixture()
      assert {:ok, %Dataset{}} = Indicators.delete_dataset(dataset)
      assert_raise Ecto.NoResultsError, fn -> Indicators.get_dataset!(dataset.id) end
    end

    test "change_dataset/1 returns a dataset changeset" do
      dataset = dataset_fixture()
      assert %Ecto.Changeset{} = Indicators.change_dataset(dataset)
    end
  end
end
