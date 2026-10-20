import type { ReactNode } from "react";

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const Storefront = () => (
  <Icon>
    <path d="M3 9.5 5 4h14l2 5.5" />
    <path d="M3 9.5h18v1a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0z" />
    <path d="M5 13v7h14v-7M10 20v-4h4v4" />
  </Icon>
);

const Wallet = () => (
  <Icon>
    <path d="M4 7a2 2 0 0 1 2-2h11v3" />
    <path d="M4 7v11a2 2 0 0 0 2 2h13a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H6a2 2 0 0 1-2-1z" />
    <circle cx="16.5" cy="14" r="1" />
  </Icon>
);

const Card = () => (
  <Icon>
    <rect x="2.5" y="5" width="19" height="14" rx="2" />
    <path d="M2.5 10h19M6 15h4" />
  </Icon>
);

const Code = () => (
  <Icon>
    <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />
  </Icon>
);

const Shield = () => (
  <Icon>
    <path d="M12 3 20 6v6c0 4.4-3.2 7.9-8 9-4.8-1.1-8-4.6-8-9V6z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
);

/** One icon per entry of `bed.bullets`, in the same order (store, wallet, payments and POS, API, access and analytics). */
export const bedQualityIcons = [Storefront, Wallet, Card, Code, Shield] as const;
