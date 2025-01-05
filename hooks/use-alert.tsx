import Alert from "@/components/molecules/alert";
import { createRoot } from "react-dom/client";

export function alert(type: AlertType) {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);
  root.render(<Alert type={type} />);

  setTimeout(() => {
    root.unmount();
    document.body.removeChild(container);
  }, 5000);
}
