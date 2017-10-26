defmodule Obs.Benchmark do
  @moduledoc """
  The Benchmark context.
  """

  import Ecto.Query, warn: false
  alias Obs.Repo

  alias Obs.Benchmark.Category
  alias Obs.Benchmark.Company
  alias Obs.Benchmark.Datasheet
  alias Obs.Benchmark.Ratios

  def create_ratios do
    companies =
      Datasheet
      |> Repo.all
      |> Enum.each(fn(data) ->
        Ratios.calculate(data)
    end)
  end

  def purgue_ratios do
    Ratios |> Repo.all |> Enum.each(& Repo.delete &1)
  end
  def percentil_ratios do
    Repo.all(Ratios)|> Repo.preload([:datasheet]) |> calculate_percentil
  end

  def calculate_percentil(ratios) do
    total_revenue = Enum.map(ratios, & &1.datasheet.total_revenue)
    net_income = Enum.map(ratios, & &1.datasheet.net_income)
    revenue_growth = Enum.map(ratios, & if(&1.revenue_growth != nil, do: &1.revenue_growth *100))
    net_income_growth = Enum.map(ratios, & if(&1.net_income_growth != nil, do: &1.net_income_growth *100))
    net_income_percent = Enum.map(ratios, & if(&1.net_income_percent != nil, do: &1.net_income_percent*100))
    operating_income = Enum.map(ratios, & if(&1.operating_income != nil, do: &1.operating_income *100))
    return_on_equety = Enum.map(ratios, & if(&1.return_on_equety != nil, do: &1.return_on_equety  *100))
    return_on_assent = Enum.map(ratios, & if(&1.return_on_assent != nil, do: &1.return_on_assent *100))
    assent_revenue = Enum.map(ratios, & if(&1.assent_revenue != nil, do: &1.assent_revenue *100))
    non_cash_assent = Enum.map(ratios, & if(&1.non_cash_assent != nil, do: &1.non_cash_assent *100))
    equity_to_assent = Enum.map(ratios, & if(&1.equity_to_assent != nil, do: &1.equity_to_assent))
    rev_per_employee = Enum.map(ratios, & if(&1.rev_per_employee != nil, do: &1.rev_per_employee))
    gross_margin = Enum.map(ratios, & if(&1.gross_margin != nil, do: &1.gross_margin *100))
    general_admin = Enum.map(ratios, & if(&1.general_admin != nil, do: &1.general_admin *100))
    r_y_d = Enum.map(ratios, & if(&1.r_y_d != nil, do: &1.r_y_d * 100))
    gya_op_ryd = Enum.map(ratios, & if(&1.gya_op_ryd != nil, do: &1.gya_op_ryd *100))
    gya_ryd_ratio = Enum.map(ratios, & if(&1.gya_ryd_ratio != nil, do: &1.gya_ryd_ratio *100))

    %{
      total_revenue: percentile_list(total_revenue),
      net_income: percentile_list(net_income),
      revenue_growth: percentile_list(revenue_growth),
      net_income_growth: percentile_list(net_income_growth),
      net_income_percent: percentile_list(net_income_percent),
      operating_income: percentile_list(operating_income),
      return_on_assent: percentile_list(return_on_assent),
      return_on_equety: percentile_list(return_on_equety),
      assent_revenue: percentile_list(return_on_equety),
      equity_to_assent: percentile_list(equity_to_assent),
      rev_per_employee: percentile_list(rev_per_employee),
      general_admin: percentile_list(general_admin),
      gross_margin: percentile_list(gross_margin),
      gya_op_ryd: percentile_list(gya_op_ryd),
      gya_ryd_ratio: percentile_list(gya_ryd_ratio),
      non_cash_assent: percentile_list(non_cash_assent),
      r_y_d: percentile_list(r_y_d)           ,
    }
  end

  def percentile_list(list) do
    list_no_nil= Enum.reject(list, &(&1 == nil))
    Enum.map([100, 90, 80,70,60,50,40,30,20,10, 0], fn(k) -> percentile(list_no_nil,k) end)
  end


  @spec min(list) :: number
  def min([]), do: nil
  def min(list) do
    Enum.min(list)
  end

  @spec max(list) :: number
  def max([]), do: nil

  def max(list) do
    Enum.max(list)
  end

  @spec percentile(list,number) :: number
  def percentile([], _), do: nil
  def percentile(list, 0), do: min(list)
  def percentile(list, 100), do: max(list)

  def percentile(list, n) when is_list(list) and is_number(n) do
    s = Enum.sort(list)
    r = n/100.0 * (length(list) - 1)
    f = :erlang.trunc(r)
    lower = Enum.at(s, f)
    upper = Enum.at(s, f + 1)
    lower + (upper - lower) * (r - f)
  end
end
