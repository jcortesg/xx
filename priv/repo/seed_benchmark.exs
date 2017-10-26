alias Obs.Benchmark
alias Obs.Repo

alias Obs.Benchmark.Datasheet

Obs.Benchmark.purgue_ratios

Datasheet
|> Repo.all
|> Enum.each(& Repo.delete &1)

data_json = Application.app_dir(:obs, "priv/repo/datasheets.json") |> File.read! |> Poison.decode!()

Enum.map(data_json, fn(data) ->
  IO.inspect data

  %Datasheet{}
  |> Datasheet.changeset(Map.new(data))
  |> Repo.insert!
end)


Obs.Benchmark.create_ratios
