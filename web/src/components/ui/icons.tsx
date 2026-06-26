type IconProps = {
  className?: string;
};

const defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function AdsIcon({ className }: IconProps) {
  return (
    <svg className={className} {...defaultProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}

export function GrowthIcon({ className }: IconProps) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M7 15l3-4 3 2 5-7" />
    </svg>
  );
}

export function MediaIcon({ className }: IconProps) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M3 11l14-7v16L3 13z" />
      <path d="M7 13v4a2 2 0 0 0 4 0" />
    </svg>
  );
}

export function AnalyticsIcon({ className }: IconProps) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M4 4h16v16H4z" />
      <path d="M4 9h16" />
      <circle cx="8" cy="14" r="1" />
      <circle cx="12" cy="14" r="1" />
      <circle cx="16" cy="14" r="1" />
    </svg>
  );
}

export function AiIcon({ className }: IconProps) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M12 2l2.2 6.8H21l-5.6 4.2 2.1 6.9L12 15.9 6.5 19.9l2.1-6.9L3 8.8h6.8z" />
    </svg>
  );
}

export function WebIcon({ className }: IconProps) {
  return (
    <svg className={className} {...defaultProps}>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 8h18" />
    </svg>
  );
}

export function LeadsIcon({ className }: IconProps) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M4 4h16v6H4z" />
      <path d="M4 14h10v6H4z" />
      <path d="M18 14l4 4-4 4" />
    </svg>
  );
}

export function ShopifyIcon({ className }: IconProps) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M3 7h18l-2 13H5L3 7z" />
      <path d="M8 7V5a4 4 0 0 1 8 0v2" />
    </svg>
  );
}

export function OpsIcon({ className }: IconProps) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M4 6h16M4 12h10M4 18h16" />
    </svg>
  );
}

export function BuildsIcon({ className }: IconProps) {
  return (
    <svg className={className} {...defaultProps}>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M9 9h6v6H9z" />
    </svg>
  );
}

export function TargetIcon({ className }: IconProps) {
  return (
    <svg className={className} {...defaultProps}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}

export function FunnelIcon({ className }: IconProps) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M4 5h16l-6 8v5l-4 2v-7z" />
    </svg>
  );
}

export const growFeatureIcons = {
  target: TargetIcon,
  funnel: FunnelIcon,
  reporting: GrowthIcon,
  ai: AiIcon,
  ops: OpsIcon,
};

export const workAreaIcons = {
  web: WebIcon,
  insights: AdsIcon,
  leads: LeadsIcon,
  shopify: ShopifyIcon,
  stores: AnalyticsIcon,
  reporting: GrowthIcon,
  ops: OpsIcon,
  marketing: MediaIcon,
  builds: BuildsIcon,
};

export function CheckIcon({ className }: IconProps) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

export function WarningIcon({ className }: IconProps) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
      <path d="M10.3 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.7 3.86a2 2 0 0 0-3.4 0z" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg className={className} {...defaultProps}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
