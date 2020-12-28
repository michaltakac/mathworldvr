import { useState, useContext, useEffect } from "react";
import { PhoenixSocketContext } from "./PhoenixSocketContext";

const useChannel = (channelName) => {
  const { socket } = useContext(PhoenixSocketContext);
  const [channel, setChannel] = useState();

  useEffect(() => {
    if (!socket) return;

    const phoenixChannel = socket.channel(channelName, { client: "browser" });

    phoenixChannel
      .join()
      .receive("ok", () => {
        console.log("Connected!");
        setChannel(phoenixChannel);
      })
      .receive("error", ({ reason }) => console.log("failed join", reason))
      .receive("timeout", () =>
        console.log("Networking issue. Still waiting...")
      );

    // leave the channel when the component unmounts
    return () => {
      phoenixChannel.leave();
    };
  }, [channelName]);
  // only connect to the channel once on component mount
  // by passing the empty array as a second arg to useEffect

  return [channel];
};

export default useChannel;
