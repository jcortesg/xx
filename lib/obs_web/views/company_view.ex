defmodule ObsWeb.CompanyView do
  use ObsWeb, :view
  alias ObsWeb.CompanyView

  def render("index.json", %{companies: companies}) do
    %{data: render_many(companies, CompanyView, "company.json")}
  end

  def render("show.json", %{company: company}) do
    %{data: render_one(company, CompanyView, "company.json")}
  end

  def render("company.json", %{company: company}) do
    %{id: company.id,
      name: company.name,
      category_id: company.category_id}
  end
end
