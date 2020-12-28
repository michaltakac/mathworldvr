defmodule MWVR.Repo do
  use Ecto.Repo,
    otp_app: :mwvr,
    adapter: Ecto.Adapters.Postgres
end
