defmodule MWVRWeb.WorldChannel do
  use Phoenix.Channel
  alias MWVRWeb.Presence
  require Logger

  def join("world:lobby", _payload, socket) do
    {:ok, socket}
  end

  # handles any other subtopic as the world ID, for example `"world:12"`, `"world:34"`
  def join("world:" <> world_id, _payload, socket) do
    {:ok, socket}
  end

  def handle_in("message", %{"body" => body, "author" => author}, socket) do
    broadcast!(socket, "message", %{body: body, author: author})
    {:noreply, socket}
  end
end
