FROM bitwalker/alpine-elixir-phoenix:latest

RUN mkdir /mwvr
WORKDIR	/mwvr

COPY ./server/mwvr/mix.exs /mwvr/mix.exs
COPY ./server/mwvr/mix.lock /mwvr/mix.lock
RUN mix local.hex --force
RUN mix local.rebar --force
COPY ./server/mwvr /mwvr
