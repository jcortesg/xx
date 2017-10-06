# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Obs.Repo.insert!(%Obs.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias Obs.{Indicators.Battery, Repo, Indicators.Serie, Indicators.Dataset}

attrs = %{
  description: "Número de empresas TI que tienen al menos un modelo de la calidad implementado en un periodo de tiempo determinado .",
  sources: "Empresas certificadoras",
  title: "Certificaciones de calidad de las empresas TI"
}

{:ok, battery} =
  %Battery{}
  |> Battery.changeset(attrs)
  |> Repo.insert()


attrs = %{
  source: "www.example.co",
  title: "Certificaciones de calidad",
  description: "Lorem ipsum",
  type: "chart",
  periodicity: "anual",
  measurement_unit: "CM",
  x_type: "ordinal"
}

{:ok, dataset} =
  %Dataset{}
  |> Dataset.changeset(attrs)
  |> Ecto.Changeset.put_assoc(:battery, battery)
  |> Repo.insert()

attrs = %{
  description: "anything awesome",
  name: "Bar awesome",
  source: "xxxx",
  type: "Line",
  data: [
    %{x: "Apples", y: 10},
    %{x: "Bananas", y: 5},
    %{x: "Cranberries", y: 15}
  ]
}

%Serie{}
|> Serie.changeset(attrs)
|> Ecto.Changeset.put_assoc(:dataset, dataset)
|> Repo.insert!()
