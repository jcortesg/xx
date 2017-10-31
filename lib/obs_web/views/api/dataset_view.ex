defmodule ObsWeb.Api.DatasetView do
  use ObsWeb, :view
  alias ObsWeb.Api.DatasetView

  def render("index.json", %{datasets: datasets}) do
    %{data: render_many(datasets, DatasetView, "dataset.json")}
  end

  def render("show.json", %{dataset: dataset}) do
    %{data: render_one(dataset, DatasetView, "dataset.json")}
  end

  def render("dataset.json", %{dataset: dataset}) do
    %{id: dataset.id,
      title: dataset.title,
      source: dataset.source,
      description: dataset.description,
      type: dataset.type,
      x_type: dataset.x_type,
      measurement_unit: dataset.measurement_unit,
      series: render_many(dataset.series, DatasetView, "serie.json")
    }
  end
  def render("serie.json", %{dataset: serie}) do
    %{
      id: serie.id,
      name: serie.name,
      color: serie.color,
      type: serie.type,
      data: serie.data
    }
  end
end
