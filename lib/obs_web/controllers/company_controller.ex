defmodule ObsWeb.CompanyController do
  use ObsWeb, :controller

  alias Obs.Benchmark
  alias Obs.Benchmark.Company

  action_fallback ObsWeb.FallbackController

  def index(conn, _params) do
    companies = Benchmark.list_companies()
    render(conn, "index.json", companies: companies)
  end

  def create(conn, %{"company" => company_params}) do
    with {:ok, %Company{} = company} <- Benchmark.create_company(company_params) do
      conn
      |> put_status(:created)
      |> render("show.json", company: company)
    end
  end

  def show(conn, %{"id" => id}) do
    company = Benchmark.get_company!(id)
    render(conn, "show.json", company: company)
  end

  def update(conn, %{"id" => id, "company" => company_params}) do
    company = Benchmark.get_company!(id)

    with {:ok, %Company{} = company} <- Benchmark.update_company(company, company_params) do
      render(conn, "show.json", company: company)
    end
  end

  def delete(conn, %{"id" => id}) do
    company = Benchmark.get_company!(id)
    with {:ok, %Company{}} <- Benchmark.delete_company(company) do
      send_resp(conn, :no_content, "")
    end
  end
end
