defmodule ObsWeb.Api.RatiosView do
  use ObsWeb, :view
  alias ObsWeb.Api.RatiosView

  def render("index.json", %{ratios: ratios}) do
    %{ data: %{
         ratios: ratios.ratios,
         ratios_services: ratios.ratios_services,
         ratios_internet: ratios.ratios_internet,
         ratios_software: ratios.ratios_software,
         ratios_less: ratios.ratios_less
       }
    }
  end

  def render("ratio.json", %{ratios: ratios}) do
    %{
      id: ratios.id
    }
  end
end
