defmodule ObsWeb.Api.BatteryView do
  use ObsWeb, :view
  alias ObsWeb.Api.BatteryView

  def render("index.json", %{batteries: batteries}) do
    %{data: render_many(batteries, BatteryView, "battery.json")}
  end

  def render("battery.json", %{battery: battery}) do
    %{
      id: battery.id,
      description: battery.description,
      title: battery.title,
      sources: battery.sources
    }
  end
end
