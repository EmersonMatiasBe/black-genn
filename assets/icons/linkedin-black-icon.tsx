import { useMemo } from "react";
import { IconContext } from "react-icons";
import { FaLinkedin } from "react-icons/fa";

export default function Linkedin2Icon(){
  const props = useMemo(() => ({ color: "white", size: "24px" }), []);

  return (
    <IconContext.Provider value={props}>
      <FaLinkedin />
    </IconContext.Provider>
  );
}