import { ILogoProps } from '~shared/ui/svg-logo/svg-logo.types';

interface ILogoTypes extends ILogoProps {
  position?: 'left' | 'right';
}

export interface IButtonProps {
  primary?: boolean;
  size: 'small' | 'medium';
  label?: string;
  logo?: ILogoTypes;
  className?: string;
  svgClasses?: string;
  isHideLabel?: boolean;
  onClick?: () => void;
}
