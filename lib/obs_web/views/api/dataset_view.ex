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
      data: dataset.data}
  end
end
