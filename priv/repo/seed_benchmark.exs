alias Obs.Benchmark
alias Obs.Repo

alias Obs.Benchmark.Datasheet

Obs.Benchmark.purgue_ratios
Obs.Benchmark.Company

Datasheet
|> Repo.all
|> Enum.each(& Repo.delete &1)

data_json = Application.app_dir(:obs, "priv/repo/datasheets.json") |> File.read! |> Poison.decode!()

Enum.map(data_json, fn(data) ->
  company = Repo.get(Obs.Benchmark.Company , data["company_id"]) |> Repo.preload([:category])

  %Datasheet{}
  |> Datasheet.changeset(Map.put(Map.new(data),"category_id", company.category.id))
  |> Repo.insert!

end)


Obs.Benchmark.create_ratios
