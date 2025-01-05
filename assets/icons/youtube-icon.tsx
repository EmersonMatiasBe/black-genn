import { useMemo } from "react";
import { IconContext } from "react-icons";
import { FaYoutube } from "react-icons/fa";

export default function YoutubeIcon(){
  const props = useMemo(() => ({ color: "white", size: "24px" }), []);

  return (
    <IconContext.Provider value={props}>
      <FaYoutube />
    </IconContext.Provider>
  );
}