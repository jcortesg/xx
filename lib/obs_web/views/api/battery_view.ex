defmodule ObsWeb.Api.BatteryView do
  use ObsWeb, :view
  alias ObsWeb.Api.BatteryView
  alias ObsWeb.Api.DatasetView

  def render("index.json", %{batteries: batteries}) do
    %{data: render_many(batteries, BatteryView, "battery.json")}
  end

  def render("show.json", %{battery: battery}) do
    %{data:
      %{
        id: battery.id,
        description: battery.description,
        title: battery.title,
        sources: battery.sources,
        datasets: render_many(battery.datasets, DatasetView, "dataset.json"),
        category: render_one(battery.category, ObsWeb.Api.CategoryView, "category.json")
      }
    }
  end

  def render("battery.json", %{battery: battery}) do
    %{
      id: battery.id,
      description: battery.description,
      title: battery.title,
      sources: battery.sources,
    }
  end
end
