import { useState, useEffect } from "react";

export function Cursor() {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    let interval = setInterval(() => setToggle(!toggle), 1000);
    return () => {
      clearInterval(interval);
    }
  }, []);

  return "|";
}
