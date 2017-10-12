defmodule ObsWeb.DatasheetControllerTest do
  use ObsWeb.ConnCase

  alias Obs.Benchmark
  alias Obs.Benchmark.Datasheet

  @create_attrs %{cash: 120.5, cost_revenue: 120.5, debt_equity: 120.5, div_yield: 120.5, employ: 120.5, free_cash_flow: 120.5, inventory: 120.5, market_cap: 120.5, marketing_expenses: 120.5, net_income: 120.5, net_income_co_ops: 120.5, net_profit_margin: 120.5, net_receivables: 120.5, p_e: 120.5, price_book: 120.5, prior_net_income: 120.5, prior_revenue: 120.5, research_development: 120.5, retained_earnings: 120.5, roe: 120.5, selling_general: 120.5, short_term_investments: 120.5, total_assets: 120.5, total_current_assets: 120.5, total_current_liabilities: 120.5, total_liabilities: 120.5, total_long_term_liabilities: 120.5, total_operating_expenses: 120.5, total_revenue: 120.5}
  @update_attrs %{cash: 456.7, cost_revenue: 456.7, debt_equity: 456.7, div_yield: 456.7, employ: 456.7, free_cash_flow: 456.7, inventory: 456.7, market_cap: 456.7, marketing_expenses: 456.7, net_income: 456.7, net_income_co_ops: 456.7, net_profit_margin: 456.7, net_receivables: 456.7, p_e: 456.7, price_book: 456.7, prior_net_income: 456.7, prior_revenue: 456.7, research_development: 456.7, retained_earnings: 456.7, roe: 456.7, selling_general: 456.7, short_term_investments: 456.7, total_assets: 456.7, total_current_assets: 456.7, total_current_liabilities: 456.7, total_liabilities: 456.7, total_long_term_liabilities: 456.7, total_operating_expenses: 456.7, total_revenue: 456.7}
  @invalid_attrs %{cash: nil, cost_revenue: nil, debt_equity: nil, div_yield: nil, employ: nil, free_cash_flow: nil, inventory: nil, market_cap: nil, marketing_expenses: nil, net_income: nil, net_income_co_ops: nil, net_profit_margin: nil, net_receivables: nil, p_e: nil, price_book: nil, prior_net_income: nil, prior_revenue: nil, research_development: nil, retained_earnings: nil, roe: nil, selling_general: nil, short_term_investments: nil, total_assets: nil, total_current_assets: nil, total_current_liabilities: nil, total_liabilities: nil, total_long_term_liabilities: nil, total_operating_expenses: nil, total_revenue: nil}

  def fixture(:datasheet) do
    {:ok, datasheet} = Benchmark.create_datasheet(@create_attrs)
    datasheet
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all datasheets", %{conn: conn} do
      conn = get conn, datasheet_path(conn, :index)
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create datasheet" do
    test "renders datasheet when data is valid", %{conn: conn} do
      conn = post conn, datasheet_path(conn, :create), datasheet: @create_attrs
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get conn, datasheet_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "cash" => 120.5,
        "cost_revenue" => 120.5,
        "debt_equity" => 120.5,
        "div_yield" => 120.5,
        "employ" => 120.5,
        "free_cash_flow" => 120.5,
        "inventory" => 120.5,
        "market_cap" => 120.5,
        "marketing_expenses" => 120.5,
        "net_income" => 120.5,
        "net_income_co_ops" => 120.5,
        "net_profit_margin" => 120.5,
        "net_receivables" => 120.5,
        "p_e" => 120.5,
        "price_book" => 120.5,
        "prior_net_income" => 120.5,
        "prior_revenue" => 120.5,
        "research_development" => 120.5,
        "retained_earnings" => 120.5,
        "roe" => 120.5,
        "selling_general" => 120.5,
        "short_term_investments" => 120.5,
        "total_assets" => 120.5,
        "total_current_assets" => 120.5,
        "total_current_liabilities" => 120.5,
        "total_liabilities" => 120.5,
        "total_long_term_liabilities" => 120.5,
        "total_operating_expenses" => 120.5,
        "total_revenue" => 120.5}
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post conn, datasheet_path(conn, :create), datasheet: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update datasheet" do
    setup [:create_datasheet]

    test "renders datasheet when data is valid", %{conn: conn, datasheet: %Datasheet{id: id} = datasheet} do
      conn = put conn, datasheet_path(conn, :update, datasheet), datasheet: @update_attrs
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get conn, datasheet_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "cash" => 456.7,
        "cost_revenue" => 456.7,
        "debt_equity" => 456.7,
        "div_yield" => 456.7,
        "employ" => 456.7,
        "free_cash_flow" => 456.7,
        "inventory" => 456.7,
        "market_cap" => 456.7,
        "marketing_expenses" => 456.7,
        "net_income" => 456.7,
        "net_income_co_ops" => 456.7,
        "net_profit_margin" => 456.7,
        "net_receivables" => 456.7,
        "p_e" => 456.7,
        "price_book" => 456.7,
        "prior_net_income" => 456.7,
        "prior_revenue" => 456.7,
        "research_development" => 456.7,
        "retained_earnings" => 456.7,
        "roe" => 456.7,
        "selling_general" => 456.7,
        "short_term_investments" => 456.7,
        "total_assets" => 456.7,
        "total_current_assets" => 456.7,
        "total_current_liabilities" => 456.7,
        "total_liabilities" => 456.7,
        "total_long_term_liabilities" => 456.7,
        "total_operating_expenses" => 456.7,
        "total_revenue" => 456.7}
    end

    test "renders errors when data is invalid", %{conn: conn, datasheet: datasheet} do
      conn = put conn, datasheet_path(conn, :update, datasheet), datasheet: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete datasheet" do
    setup [:create_datasheet]

    test "deletes chosen datasheet", %{conn: conn, datasheet: datasheet} do
      conn = delete conn, datasheet_path(conn, :delete, datasheet)
      assert response(conn, 204)
      assert_error_sent 404, fn ->
        get conn, datasheet_path(conn, :show, datasheet)
      end
    end
  end

  defp create_datasheet(_) do
    datasheet = fixture(:datasheet)
    {:ok, datasheet: datasheet}
  end
end
