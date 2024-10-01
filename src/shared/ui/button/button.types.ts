import { LogoProps } from '../logo/logo.types';

interface LogoTypes extends LogoProps {
  position: 'left' | 'right';
}

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  label: string;
  onClick?: () => void;
  logo?: LogoTypes;
}
