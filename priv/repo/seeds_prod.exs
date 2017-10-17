alias Obs.{Indicators.Category, Repo}

categories =[
  %{name: "Asociatividad", type: "1"},
  %{name: "Calidad", type: "1"},
  %{name: "Gestión Empresarial", type: "1"},
  %{name: "Infraestructura", type: "1"},
  %{name: "Ratios Financieros", type: "1"},
  %{name: "Investigación, desarrollo e innovación", type: "1"},
  %{name: "Talento Humano", type: "1"},
  %{name: "Generalidades del Sector", type: "1"},
  %{name: "Industria", type: "2"},
  %{name: "Mercado", type: "2"},
  %{name: "Talento", type: "2"},
  %{name: "Tendencias", type: "2"},
  %{name: "Primer trimestre 2017", type: "3"},
  %{name: "Segundo trimestre 2017", type: "3"},
  %{name: "Tercer trimestre", type: "3"}
]

Enum.map(categories, fn(category) ->
  %Category{}
  |> Category.changeset(category)
  |> Repo.insert!
end)


alias Obs.Benchmark
cat = [
  %{name: "Internet"},
  %{name: "Computer Software & Services"},
  %{name: "Diversified Services"},
  %{name: "Electronics"},
  %{name: "Telecomunications"},
  %{name: "Computer Hardware"}
]

Enum.map(cat, fn(category) ->
  %Benchmark.Category{}
  |> Benchmark.Category.changeset(category)
  |> Repo.insert!
end)


companies_json = Application.app_dir(:obs, "priv/repo/companies.json") |> File.read! |> Poison.decode!()

Enum.map(companies_json, fn(company) ->
  IO.inspect company
  %Benchmark.Company{}
  |> Benchmark.Company.changeset(company)
  |> Repo.insert!
end)

alias Obs.Benchmark.Datasheet

data_json = Application.app_dir(:obs, "priv/repo/datasets.json") |> File.read! |> Poison.decode!()

Enum.map(data_json, fn(data) ->
  comp = Enum.map(data, fn {k, v} ->
  {f, _} =
    "#{v}"
    |> String.replace(",", "")
    |> String.replace(" ","")
    |> Float.parse
  {k,  f}
  end)

  %Datasheet{}
  |> Datasheet.changeset(Map.new(comp))
  |> Repo.insert!
end)
