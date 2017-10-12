defmodule ObsWeb.DatasheetView do
  use ObsWeb, :view
  alias ObsWeb.DatasheetView

  def render("index.json", %{datasheets: datasheets}) do
    %{data: render_many(datasheets, DatasheetView, "datasheet.json")}
  end

  def render("show.json", %{datasheet: datasheet}) do
    %{data: render_one(datasheet, DatasheetView, "datasheet.json")}
  end

  def render("datasheet.json", %{datasheet: datasheet}) do
    %{id: datasheet.id,
      total_revenue: datasheet.total_revenue,
      cost_revenue: datasheet.cost_revenue,
      research_development: datasheet.research_development,
      marketing_expenses: datasheet.marketing_expenses,
      selling_general: datasheet.selling_general,
      total_operating_expenses: datasheet.total_operating_expenses,
      net_income_co_ops: datasheet.net_income_co_ops,
      net_income: datasheet.net_income,
      prior_revenue: datasheet.prior_revenue,
      prior_net_income: datasheet.prior_net_income,
      cash: datasheet.cash,
      short_term_investments: datasheet.short_term_investments,
      net_receivables: datasheet.net_receivables,
      inventory: datasheet.inventory,
      total_current_assets: datasheet.total_current_assets,
      total_assets: datasheet.total_assets,
      total_current_liabilities: datasheet.total_current_liabilities,
      total_long_term_liabilities: datasheet.total_long_term_liabilities,
      total_liabilities: datasheet.total_liabilities,
      retained_earnings: datasheet.retained_earnings,
      employ: datasheet.employ,
      market_cap: datasheet.market_cap,
      p_e: datasheet.p_e,
      roe: datasheet.roe,
      div_yield: datasheet.div_yield,
      debt_equity: datasheet.debt_equity,
      price_book: datasheet.price_book,
      net_profit_margin: datasheet.net_profit_margin,
      free_cash_flow: datasheet.free_cash_flow}
  end
end
