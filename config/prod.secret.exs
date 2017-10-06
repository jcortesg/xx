use Mix.Config

# In this file, we keep production configuration that
# you'll likely want to automate and keep away from
# your version control system.
#
# You should document the content of this
# file or create a script for recreating it, since it's
# kept out of version control and might be hard to recover
# or recreate for your teammates (or yourself later on).
config :obs, ObsWeb.Endpoint,
  secret_key_base: "cDw3IV+6SpkqAM1iczrybz1JIPe5uImHk/k+ZaC4hd/aKIpslTrUl+5Haih04Gtu"

# Configure your database
config :obs, Obs.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "password",
  database: "observatorio_dev",
  pool_size: 15
