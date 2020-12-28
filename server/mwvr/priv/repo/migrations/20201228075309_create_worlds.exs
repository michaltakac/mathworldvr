defmodule MWVR.Repo.Migrations.CreateWorlds do
  use Ecto.Migration

  def change do
    create table(:worlds) do
      add :name, :string, null: false

      timestamps()
    end

  end
end
