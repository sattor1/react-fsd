import { useEffect, useState } from 'react';
import { LogoProps } from './logo.types';

export const Logo = ({ name, ...props }: LogoProps) => {
  const [SvgComponent, setSvgComponent] = useState<React.FunctionComponent<React.SVGProps<SVGSVGElement>> | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    (async function loadSvg() {
      try {
        const { ReactComponent } = await import(`~svg/${name}.svg`);
        setSvgComponent(() => ReactComponent);
      } catch (err) {
        console.error(`Error loading SVG: ${name}`, err);
        setError(true);
      }
    })();
  }, [name]);

  if (error) {
    return <div>Error loading SVG</div>;
  }

  if (!SvgComponent) {
    return null;
  }

  return <SvgComponent {...props} />;
};
