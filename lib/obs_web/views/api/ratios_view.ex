defmodule ObsWeb.Api.RatiosView do
  use ObsWeb, :view
  alias ObsWeb.Api.RatiosView

  def render("index.json", %{ratios: ratios}) do
    %{ data: %{
         total_revenue: ratios.total_revenue,
         net_income: ratios.net_income,
         equity_to_assent: ratios.equity_to_assent,
         general_admin: ratios.general_admin,
         gross_margin: ratios.gross_margin  ,
         gya_op_ryd: ratios.gya_op_ryd     ,
         gya_ryd_ratio: ratios.gya_ryd_ratio  ,
         net_income_growth: ratios.net_income_growth,
         net_income_percent: ratios.net_income_percent,
         non_cash_assent: ratios.non_cash_assent,
         operating_income: ratios.operating_income,
         r_y_d: ratios.r_y_d           ,
         return_on_assent: ratios.return_on_assent,
         return_on_equety: ratios.return_on_equety,
         rev_per_employee: ratios.rev_per_employee,
         revenue_growth: ratios.revenue_growth
   }
}
  end

  def render("ratio.json", %{ratios: ratios}) do
    %{
      id: ratios.id
    }
  end
end
