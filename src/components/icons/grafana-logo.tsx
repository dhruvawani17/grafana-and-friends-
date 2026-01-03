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
        d="M12.566 2.01a10.98 10.98 0 0 0-10.556 11 11.002 11.002 0 0 0 7.333 10.37 11.002 11.002 0 0 0 13.222-13.222 11.002 11.002 0 0 0-10-8.148zm.556 2.444a8.556 8.556 0 0 1 7.667 6.111 8.556 8.556 0 0 1-9.778 10.333 8.556 8.556 0 0 1-6.111-7.667 8.556 8.556 0 0 1 8.222-8.777zm-4.889 4.889a6.111 6.111 0 0 0 4.889 10.333 6.111 6.111 0 0 0 6.111-6.111 6.111 6.111 0 0 0-11-4.222zm4.889 2.444a3.667 3.667 0 0 1 3.667 3.667 3.667 3.667 0 0 1-3.667 3.667 3.667 3.667 0 0 1-3.667-3.667 3.667 3.667 0 0 1 3.667-3.667z"
        fill="currentColor"
      />
    </svg>
  );
}
