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

const LEAF_MAIN =
  'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z';
const LEAF_STEM = 'M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12';

function BrandLeaf({ transform }: { transform: string }) {
  return (
    <g transform={transform}>
      <path d={LEAF_MAIN} />
      <path d={LEAF_STEM} />
    </g>
  );
}

/** Three Lucide-style leaves — app brand mark. */
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
      <g transform="translate(12 21)">
        <BrandLeaf transform="rotate(-34) scale(0.58) translate(-11 -20)" />
        <BrandLeaf transform="scale(0.68) translate(-11 -20)" />
        <BrandLeaf transform="rotate(34) scale(0.58) translate(-11 -20)" />
      </g>
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
