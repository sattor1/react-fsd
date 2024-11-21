import { useState, useEffect } from 'react';
import { ILogoProps } from './svg-logo.types';

export const SvgLogo = ({ name, ...props }: ILogoProps) => {
  const [SvgComponent, setSvgComponent] = useState<React.FunctionComponent<React.SVGProps<SVGSVGElement>> | null>(null);

  useEffect(() => {
    (async function loadSvg() {
      try {
        const { ReactComponent } = await import(`~svg/${name}.svg`);
        setSvgComponent(() => ReactComponent);
      } catch (err) {
        console.error(`Error loading SVG: ${name}`, err);
      }
    })();
  }, [name]);

  if (!SvgComponent) {
    return null;
  }

  return <SvgComponent {...props} />;
};
