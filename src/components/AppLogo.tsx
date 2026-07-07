import { IconBrand } from './Icons';

interface Props {
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
}

export function AppLogo({ size = 'md', showWordmark = true }: Props) {
  const iconSize = size === 'sm' ? 22 : size === 'lg' ? 32 : 26;

  return (
    <div className={`app-logo app-logo--${size}`}>
      <span className="app-logo-mark" aria-hidden>
        <IconBrand size={iconSize} />
      </span>
      {showWordmark && (
        <div className="app-logo-text">
          <span className="app-logo-title">Ahimsa Kitchen</span>
          <span className="app-logo-tagline">vegan meal planner</span>
        </div>
      )}
    </div>
  );
}
