import {
  Coffee,
  Copy,
  GripVertical,
  Info,
  Leaf,
  Moon,
  Plus,
  Search,
  Settings,
  Sun,
  X,
  Zap,
  type LucideProps,
} from 'lucide-react';

type IconProps = LucideProps;

const LOTUS_CENTER = '12 12';

/** Pointed petal radiating from center — classic top-view lotus. */
const LOTUS_OUTER_PETAL = 'M12 12C7.4 10.6 5.2 4.8 12 1.6C18.8 4.8 16.6 10.6 12 12Z';
const LOTUS_INNER_PETAL = 'M12 12C10.1 11.2 9.4 8.2 12 6.2C14.6 8.2 13.9 11.2 12 12Z';

const LOTUS_OUTER_ANGLES = [-90, -45, 0, 45, 90, 135, 180, 225];
const LOTUS_INNER_ANGLES = [-67.5, -22.5, 22.5, 67.5, 112.5, 157.5, -157.5, -112.5];

function LotusPetal({
  d,
  angle,
  fillOpacity,
}: {
  d: string;
  angle: number;
  fillOpacity?: number;
}) {
  return (
    <path
      d={d}
      transform={`rotate(${angle} ${LOTUS_CENTER})`}
      fill="currentColor"
      fillOpacity={fillOpacity}
    />
  );
}

/** Lotus flower — app brand mark (top view, two petal rings). */
export function IconBrand({ size = 24, strokeWidth = 1.75, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {LOTUS_OUTER_ANGLES.map((angle) => (
        <LotusPetal key={`o-${angle}`} d={LOTUS_OUTER_PETAL} angle={angle} fillOpacity={0.14} />
      ))}
      {LOTUS_INNER_ANGLES.map((angle) => (
        <LotusPetal key={`i-${angle}`} d={LOTUS_INNER_PETAL} angle={angle} fillOpacity={0.26} />
      ))}
      <circle cx={12} cy={12} r={1.1} fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconBreakfast(props: IconProps) {
  return <Sun strokeWidth={1.75} {...props} />;
}

export function IconLunch(props: IconProps) {
  return <Leaf strokeWidth={1.75} {...props} />;
}

export function IconDinner(props: IconProps) {
  return <Moon strokeWidth={1.75} {...props} />;
}

export function IconSnack(props: IconProps) {
  return <Zap strokeWidth={1.75} {...props} />;
}

export function IconAdd(props: IconProps) {
  return <Plus strokeWidth={2} {...props} />;
}

export function IconInfo(props: IconProps) {
  return <Info strokeWidth={1.75} {...props} />;
}

export function IconCopy(props: IconProps) {
  return <Copy strokeWidth={1.75} {...props} />;
}

export function IconClose(props: IconProps) {
  return <X strokeWidth={2} {...props} />;
}

export function IconDrag(props: IconProps) {
  return <GripVertical strokeWidth={1.75} {...props} />;
}

export function IconSearch(props: IconProps) {
  return <Search strokeWidth={1.75} {...props} />;
}

export function IconSettings(props: IconProps) {
  return <Settings strokeWidth={1.75} {...props} />;
}

/** Modal title accent per meal (mockup emojis). */
export const MEAL_EMOJI = {
  breakfast: '☀️',
  lunch: '🌿',
  dinner: '🌙',
  snack: '⚡',
} as const;

export function IconCoffee(props: IconProps) {
  return <Coffee strokeWidth={1.75} {...props} />;
}
