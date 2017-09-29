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
end
