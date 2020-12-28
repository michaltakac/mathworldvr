defmodule MWVR.Worlds.World do
  use Ecto.Schema
  import Ecto.Changeset

  schema "worlds" do
    field :name, :string

    timestamps()
  end

  @doc false
  def changeset(world, attrs) do
    world
    |> cast(attrs, [:name])
    |> validate_required([:name])
  end
end
