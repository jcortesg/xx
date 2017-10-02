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

alias Obs.{Indicators.Battery, Repo}

attrs = %{
  description: "Número de empresas TI que tienen al menos un modelo de la calidad implementado en un periodo de tiempo determinado .",
  sources: "Empresas certificadoras",
  title: "Certificaciones de calidad de las empresas TI"
}

%Battery{}
|> Battery.changeset(attrs)
|> Repo.insert()
