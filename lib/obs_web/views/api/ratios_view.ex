defmodule ObsWeb.Api.RatiosView do
  use ObsWeb, :view
  alias ObsWeb.Api.RatiosView

  def render("index.json", %{ratios: ratios}) do
    %{ data: %{
         total_revenue: ratios.total_revenue,
         net_income: ratios.net_income,
         equity_to_assent: ratios.equity_to_assent,
         general_admin: ratios.equity_to_assent,
         gross_margin: ratios.equity_to_assent  ,
         gya_op_ryd: ratios.equity_to_assent     ,
         gya_ryd_ratio: ratios.equity_to_assent  ,
         net_income_growth: ratios.equity_to_assent,
         net_income_percent: ratios.equity_to_assent,
         non_cash_assent: ratios.equity_to_assent,
         operating_income: ratios.equity_to_assent,
         r_y_d: ratios.equity_to_assent           ,
         return_on_assent: ratios.equity_to_assent,
         return_on_equety: ratios.equity_to_assent,
         rev_per_employee: ratios.equity_to_assent,
         revenue_growth: ratios.equity_to_assent
   }
}
  end

  def render("ratio.json", %{ratios: ratios}) do
    %{
      id: ratios.id
    }
  end
end
