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

  def percentil_ratios do
    Repo.all(Ratios)|> Repo.preload([:datasheet]) |> calculate_percentil
  end

  def calculate_percentil(ratios) do
    total_revenue = Enum.map(ratios, & &1.datasheet.total_revenue)
    net_income = Enum.map(ratios, & &1.datasheet.net_income)
    equity_to_assent = Enum.map(ratios, fn(x) -> x.equity_to_assent * 100 end)
    general_admin = Enum.map(ratios, fn(x) -> x.general_admin end)
    gross_margin = Enum.map(ratios, fn(x) -> x.gross_margin end)
    gya_op_ryd = Enum.map(ratios, fn(x) -> x.gya_op_ryd end)
    gya_ryd_ratio = Enum.map(ratios, fn(x) -> x.gya_ryd_ratio end)
    net_income_growth = Enum.map(ratios, fn(x) -> x.net_income_growth end)
    net_income_percent = Enum.map(ratios, fn(x) -> x.net_income_percent end)
    non_cash_assent = Enum.map(ratios, fn(x) -> x.non_cash_assent end)
    operating_income = Enum.map(ratios, fn(x) -> x.operating_income end)
    r_y_d = Enum.map(ratios, fn(x) -> x.r_y_d end)
    return_on_assent = Enum.map(ratios, fn(x) -> x.return_on_assent end)
    return_on_equety = Enum.map(ratios, fn(x) -> x.return_on_equety end)
    rev_per_employee = Enum.map(ratios, fn(x) -> x.rev_per_employee end)
    revenue_growth = Enum.map(ratios, fn(x) -> x.revenue_growth *100 end)

    %{
      total_revenue: percentile_list(total_revenue),
      net_income: percentile_list(total_revenue),
      equity_to_assent: percentile_list(equity_to_assent),
      general_admin: percentile_list(equity_to_assent),
      gross_margin: percentile_list(equity_to_assent),
      gya_op_ryd: percentile_list(equity_to_assent),
      gya_ryd_ratio: percentile_list(equity_to_assent),
      net_income_growth: percentile_list(equity_to_assent),
      net_income_percent: percentile_list(equity_to_assent),
      non_cash_assent: percentile_list(equity_to_assent),
      operating_income: percentile_list(equity_to_assent),
      r_y_d: percentile_list(equity_to_assent)           ,
      return_on_assent: percentile_list(equity_to_assent),
      return_on_equety: percentile_list(equity_to_assent),
      rev_per_employee: percentile_list(equity_to_assent),
      revenue_growth: percentile_list(equity_to_assent)
    }
  end

  def percentile_list(list) do
    Enum.map([100, 90, 80,70,60,50,40,30,20,10], fn(k) -> percentile(list,k) end)
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
