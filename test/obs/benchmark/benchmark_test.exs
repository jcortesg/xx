defmodule Obs.BenchmarkTest do
  use Obs.DataCase

  alias Obs.Benchmark

  describe "categories" do
    alias Obs.Benchmark.Category

    @valid_attrs %{name: "some name"}
    @update_attrs %{name: "some updated name"}
    @invalid_attrs %{name: nil}

    def category_fixture(attrs \\ %{}) do
      {:ok, category} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Benchmark.create_category()

      category
    end

    test "list_categories/0 returns all categories" do
      category = category_fixture()
      assert Benchmark.list_categories() == [category]
    end

    test "get_category!/1 returns the category with given id" do
      category = category_fixture()
      assert Benchmark.get_category!(category.id) == category
    end

    test "create_category/1 with valid data creates a category" do
      assert {:ok, %Category{} = category} = Benchmark.create_category(@valid_attrs)
      assert category.name == "some name"
    end

    test "create_category/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Benchmark.create_category(@invalid_attrs)
    end

    test "update_category/2 with valid data updates the category" do
      category = category_fixture()
      assert {:ok, category} = Benchmark.update_category(category, @update_attrs)
      assert %Category{} = category
      assert category.name == "some updated name"
    end

    test "update_category/2 with invalid data returns error changeset" do
      category = category_fixture()
      assert {:error, %Ecto.Changeset{}} = Benchmark.update_category(category, @invalid_attrs)
      assert category == Benchmark.get_category!(category.id)
    end

    test "delete_category/1 deletes the category" do
      category = category_fixture()
      assert {:ok, %Category{}} = Benchmark.delete_category(category)
      assert_raise Ecto.NoResultsError, fn -> Benchmark.get_category!(category.id) end
    end

    test "change_category/1 returns a category changeset" do
      category = category_fixture()
      assert %Ecto.Changeset{} = Benchmark.change_category(category)
    end
  end

  describe "companies" do
    alias Obs.Benchmark.Company

    @valid_attrs %{category_id: "some category_id", name: "some name"}
    @update_attrs %{category_id: "some updated category_id", name: "some updated name"}
    @invalid_attrs %{category_id: nil, name: nil}

    def company_fixture(attrs \\ %{}) do
      {:ok, company} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Benchmark.create_company()

      company
    end

    test "list_companies/0 returns all companies" do
      company = company_fixture()
      assert Benchmark.list_companies() == [company]
    end

    test "get_company!/1 returns the company with given id" do
      company = company_fixture()
      assert Benchmark.get_company!(company.id) == company
    end

    test "create_company/1 with valid data creates a company" do
      assert {:ok, %Company{} = company} = Benchmark.create_company(@valid_attrs)
      assert company.category_id == "some category_id"
      assert company.name == "some name"
    end

    test "create_company/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Benchmark.create_company(@invalid_attrs)
    end

    test "update_company/2 with valid data updates the company" do
      company = company_fixture()
      assert {:ok, company} = Benchmark.update_company(company, @update_attrs)
      assert %Company{} = company
      assert company.category_id == "some updated category_id"
      assert company.name == "some updated name"
    end

    test "update_company/2 with invalid data returns error changeset" do
      company = company_fixture()
      assert {:error, %Ecto.Changeset{}} = Benchmark.update_company(company, @invalid_attrs)
      assert company == Benchmark.get_company!(company.id)
    end

    test "delete_company/1 deletes the company" do
      company = company_fixture()
      assert {:ok, %Company{}} = Benchmark.delete_company(company)
      assert_raise Ecto.NoResultsError, fn -> Benchmark.get_company!(company.id) end
    end

    test "change_company/1 returns a company changeset" do
      company = company_fixture()
      assert %Ecto.Changeset{} = Benchmark.change_company(company)
    end
  end

  describe "datasheets" do
    alias Obs.Benchmark.Datasheet

    @valid_attrs %{cash: 120.5, cost_revenue: 120.5, debt_equity: 120.5, div_yield: 120.5, employ: 120.5, free_cash_flow: 120.5, inventory: 120.5, market_cap: 120.5, marketing_expenses: 120.5, net_income: 120.5, net_income_co_ops: 120.5, net_profit_margin: 120.5, net_receivables: 120.5, p_e: 120.5, price_book: 120.5, prior_net_income: 120.5, prior_revenue: 120.5, research_development: 120.5, retained_earnings: 120.5, roe: 120.5, selling_general: 120.5, short_term_investments: 120.5, total_assets: 120.5, total_current_assets: 120.5, total_current_liabilities: 120.5, total_liabilities: 120.5, total_long_term_liabilities: 120.5, total_operating_expenses: 120.5, total_revenue: 120.5}
    @update_attrs %{cash: 456.7, cost_revenue: 456.7, debt_equity: 456.7, div_yield: 456.7, employ: 456.7, free_cash_flow: 456.7, inventory: 456.7, market_cap: 456.7, marketing_expenses: 456.7, net_income: 456.7, net_income_co_ops: 456.7, net_profit_margin: 456.7, net_receivables: 456.7, p_e: 456.7, price_book: 456.7, prior_net_income: 456.7, prior_revenue: 456.7, research_development: 456.7, retained_earnings: 456.7, roe: 456.7, selling_general: 456.7, short_term_investments: 456.7, total_assets: 456.7, total_current_assets: 456.7, total_current_liabilities: 456.7, total_liabilities: 456.7, total_long_term_liabilities: 456.7, total_operating_expenses: 456.7, total_revenue: 456.7}
    @invalid_attrs %{cash: nil, cost_revenue: nil, debt_equity: nil, div_yield: nil, employ: nil, free_cash_flow: nil, inventory: nil, market_cap: nil, marketing_expenses: nil, net_income: nil, net_income_co_ops: nil, net_profit_margin: nil, net_receivables: nil, p_e: nil, price_book: nil, prior_net_income: nil, prior_revenue: nil, research_development: nil, retained_earnings: nil, roe: nil, selling_general: nil, short_term_investments: nil, total_assets: nil, total_current_assets: nil, total_current_liabilities: nil, total_liabilities: nil, total_long_term_liabilities: nil, total_operating_expenses: nil, total_revenue: nil}

    def datasheet_fixture(attrs \\ %{}) do
      {:ok, datasheet} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Benchmark.create_datasheet()

      datasheet
    end

    test "list_datasheets/0 returns all datasheets" do
      datasheet = datasheet_fixture()
      assert Benchmark.list_datasheets() == [datasheet]
    end

    test "get_datasheet!/1 returns the datasheet with given id" do
      datasheet = datasheet_fixture()
      assert Benchmark.get_datasheet!(datasheet.id) == datasheet
    end

    test "create_datasheet/1 with valid data creates a datasheet" do
      assert {:ok, %Datasheet{} = datasheet} = Benchmark.create_datasheet(@valid_attrs)
      assert datasheet.cash == 120.5
      assert datasheet.cost_revenue == 120.5
      assert datasheet.debt_equity == 120.5
      assert datasheet.div_yield == 120.5
      assert datasheet.employ == 120.5
      assert datasheet.free_cash_flow == 120.5
      assert datasheet.inventory == 120.5
      assert datasheet.market_cap == 120.5
      assert datasheet.marketing_expenses == 120.5
      assert datasheet.net_income == 120.5
      assert datasheet.net_income_co_ops == 120.5
      assert datasheet.net_profit_margin == 120.5
      assert datasheet.net_receivables == 120.5
      assert datasheet.p_e == 120.5
      assert datasheet.price_book == 120.5
      assert datasheet.prior_net_income == 120.5
      assert datasheet.prior_revenue == 120.5
      assert datasheet.research_development == 120.5
      assert datasheet.retained_earnings == 120.5
      assert datasheet.roe == 120.5
      assert datasheet.selling_general == 120.5
      assert datasheet.short_term_investments == 120.5
      assert datasheet.total_assets == 120.5
      assert datasheet.total_current_assets == 120.5
      assert datasheet.total_current_liabilities == 120.5
      assert datasheet.total_liabilities == 120.5
      assert datasheet.total_long_term_liabilities == 120.5
      assert datasheet.total_operating_expenses == 120.5
      assert datasheet.total_revenue == 120.5
    end

    test "create_datasheet/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Benchmark.create_datasheet(@invalid_attrs)
    end

    test "update_datasheet/2 with valid data updates the datasheet" do
      datasheet = datasheet_fixture()
      assert {:ok, datasheet} = Benchmark.update_datasheet(datasheet, @update_attrs)
      assert %Datasheet{} = datasheet
      assert datasheet.cash == 456.7
      assert datasheet.cost_revenue == 456.7
      assert datasheet.debt_equity == 456.7
      assert datasheet.div_yield == 456.7
      assert datasheet.employ == 456.7
      assert datasheet.free_cash_flow == 456.7
      assert datasheet.inventory == 456.7
      assert datasheet.market_cap == 456.7
      assert datasheet.marketing_expenses == 456.7
      assert datasheet.net_income == 456.7
      assert datasheet.net_income_co_ops == 456.7
      assert datasheet.net_profit_margin == 456.7
      assert datasheet.net_receivables == 456.7
      assert datasheet.p_e == 456.7
      assert datasheet.price_book == 456.7
      assert datasheet.prior_net_income == 456.7
      assert datasheet.prior_revenue == 456.7
      assert datasheet.research_development == 456.7
      assert datasheet.retained_earnings == 456.7
      assert datasheet.roe == 456.7
      assert datasheet.selling_general == 456.7
      assert datasheet.short_term_investments == 456.7
      assert datasheet.total_assets == 456.7
      assert datasheet.total_current_assets == 456.7
      assert datasheet.total_current_liabilities == 456.7
      assert datasheet.total_liabilities == 456.7
      assert datasheet.total_long_term_liabilities == 456.7
      assert datasheet.total_operating_expenses == 456.7
      assert datasheet.total_revenue == 456.7
    end

    test "update_datasheet/2 with invalid data returns error changeset" do
      datasheet = datasheet_fixture()
      assert {:error, %Ecto.Changeset{}} = Benchmark.update_datasheet(datasheet, @invalid_attrs)
      assert datasheet == Benchmark.get_datasheet!(datasheet.id)
    end

    test "delete_datasheet/1 deletes the datasheet" do
      datasheet = datasheet_fixture()
      assert {:ok, %Datasheet{}} = Benchmark.delete_datasheet(datasheet)
      assert_raise Ecto.NoResultsError, fn -> Benchmark.get_datasheet!(datasheet.id) end
    end

    test "change_datasheet/1 returns a datasheet changeset" do
      datasheet = datasheet_fixture()
      assert %Ecto.Changeset{} = Benchmark.change_datasheet(datasheet)
    end
  end
end
