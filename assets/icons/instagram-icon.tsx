import { useMemo } from "react";
import { IconContext } from "react-icons";
import { RiInstagramFill } from "react-icons/ri";

export default function InstagramIcon() {
    const props = useMemo(() => ({ color: "white", size: "24px" }), []);

  return (
    <IconContext.Provider value={props}>
      <RiInstagramFill />
    </IconContext.Provider>
  );
}
