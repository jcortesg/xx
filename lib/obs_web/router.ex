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
    get "/studies", PageController, :studies
    get "/studies/id", PageController, :studies
    get "/bulletins", PageController, :studies
    get "/bulletins/:id", PageController, :studies
  end

  scope "/batteries", ObsWeb do
    pipe_through :browser # Use the default browser stack
    get "/", BatteryController, :index
    get "/*path", BatteryController, :index
  end

  scope "/benchmark", ObsWeb do
    pipe_through :browser # Use the default browser stack
    get "/", BenchmarkController, :index
    get "/*path", BenchmarkController, :index
  end

  scope "/admin", ObsWeb do
    pipe_through :browser # Use the default browser stack
    get "/", AdminController, :index
    get "/*path", AdminController, :index
  end

  scope "/api", ObsWeb.Api do
    pipe_through :api
    get "categories/:params", CategoryController, :index
    resources "/batteries", BatteryController do
      resources "/datasets", DatasetController
    end

    resources "/posts", PostController, except: [:new, :edit]
    resources "ratios", RatiosController, only: [:index]
  end

  # Other scopes may use custom stacks.
  # scope "/api", ObsWeb do
  #   pipe_through :api
  # end
end
