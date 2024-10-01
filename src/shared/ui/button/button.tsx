import { Logo } from '../logo/logo';
import { ButtonProps } from './button.types';

export const Button = ({ primary = false, backgroundColor, label, logo, ...props }: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const classes =
    'button px-5 py-4 bg-primary text-primary-white font-medium flex gap-2 rounded hover:bg-primary-neutral transition-all duration-300 group';

  return (
    <button
      type="button"
      className={['storybook-button', classes, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      <Logo name="load" />
      {label}
    </button>
  );
};
