defmodule MWVRWeb.PageController do
  use MWVRWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
