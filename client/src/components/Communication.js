import React, { useState, useEffect } from "react";
import useChannel from "../useChannel";

export function Communication() {
  const [worldChannel] = useChannel("world:lobby");

  const [user, setUser] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!worldChannel) return;

    const messagesHandler = (payload) => {
      console.log("new payload: ", payload, messages)
      let msgs = [...messages, payload];
      setMessages(msgs);
    };
    const serverMessagesHandler = (payload) => {
      setMessages((messages) => {
        messages.push({
          ...payload,
          author: "Notification",
          style: { color: "red", fontSize: "25px" },
        });
        return messages;
      });

      // console.log(messages);
    };
    worldChannel.on("message", messagesHandler);
    worldChannel.on("server", serverMessagesHandler);

    return () => {
      worldChannel.off("message", messagesHandler);
      worldChannel.off("server", serverMessagesHandler);
    };
  }, [worldChannel]);

  useEffect(() => {
    if (!worldChannel) return;

    fetch("http://faker.hook.io/?property=name.findName")
      .then(response => response.text())
      .then(JSON.parse)
      .then(name => {
        console.log(name)
        setUser(name);

        worldChannel.push("message", { body: "Hi", author: name }, 3000);
      });
  }, [worldChannel]);

  console.log(messages);

  return null;
}
