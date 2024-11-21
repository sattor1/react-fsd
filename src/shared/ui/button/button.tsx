import { SvgLogo } from '~shared/ui/svg-logo';
import { IButtonProps } from './button.types';

export const Button = ({
  primary = false,
  label,
  logo,
  isHideLabel = false,
  className: parentClasses,
  svgClasses,
  size = 'small',
  ...props
}: IButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const sizeClass = size === 'medium' ? 'md:text-ml md:leading-6' : 'md:text-s';
  const hideLabelClass = isHideLabel ? 'px-4' : 'px-5';
  const classes = [
    'group py-4 bg-black text-white font-medium flex gap-2 rounded',
    'hover:outline-neutral hover:bg-neutral transition-bg duration-300 items-center',
    'outline outline-2 outline-black active:bg-white active:text-black',
    hideLabelClass,
    sizeClass,
    mode,
    parentClasses
  ].join(' ');

  if (logo?.name && !logo?.position) logo.position = 'left';

  return (
    <button
      type="button"
      className={['storybook-button', classes, mode, sizeClass, hideLabelClass, parentClasses].join(' ')}
      {...props}
    >
      {logo?.position === 'left' && <SvgLogo name={logo.name} width="20" height="20" className={svgClasses} />}
      {!isHideLabel && label}
      {logo?.position === 'right' && <SvgLogo name={logo.name} width="20" height="20" className={svgClasses} />}
    </button>
  );
};
