defmodule ObsWeb.Router do
  use ObsWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", ObsWeb do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    get "/benchmark", BenchmarkController, :index
    resources "/batteries", BatterieController
  end

  scope "/api", ObsWeb.Api do
    pipe_through :api
    resources "/datasets", DatasetController
  end

  # Other scopes may use custom stacks.
  # scope "/api", ObsWeb do
  #   pipe_through :api
  # end
end
