import type { SVGProps } from "react";

export function GrafanaLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM9.5 7.5a1 1 0 011-1h5a1 1 0 110 2h-5a1 1 0 01-1-1zm1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm-1 5a1 1 0 000 2h5a1 1 0 100-2h-5z"
        fill="currentColor"
      />
    </svg>
  );
}
