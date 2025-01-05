import { SVGProps } from "react";

export default function EmailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.001 0H2.00098C0.900977 0 0.0109766 0.9 0.0109766 2L0.000976562 14C0.000976562 15.1 0.900977 16 2.00098 16H18.001C19.101 16 20.001 15.1 20.001 14V2C20.001 0.9 19.101 0 18.001 0ZM17.601 4.25L10.531 8.67C10.211 8.87 9.79098 8.87 9.47098 8.67L2.40098 4.25C2.15098 4.09 2.00098 3.82 2.00098 3.53C2.00098 2.86 2.73098 2.46 3.30098 2.81L10.001 7L16.701 2.81C17.271 2.46 18.001 2.86 18.001 3.53C18.001 3.82 17.851 4.09 17.601 4.25Z"
      />
    </svg>
  );
}
