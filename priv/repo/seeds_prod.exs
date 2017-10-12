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
