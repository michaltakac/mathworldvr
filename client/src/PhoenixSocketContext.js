import React, { createContext, useEffect, useState } from "react";
import { Socket } from "phoenix";

const PhoenixSocketContext = createContext({ socket: null });

const PhoenixSocketProvider = ({ children }) => {
  const socket = new Socket("ws://localhost:4000/socket");

  useEffect(() => {
    socket.connect();
  }, []);

  if (!socket) return null;

  return (
    <PhoenixSocketContext.Provider value={{ socket }}>
      {children}
    </PhoenixSocketContext.Provider>
  );
};

export { PhoenixSocketContext, PhoenixSocketProvider };
