import { SvgLogo } from '~shared/ui/svg-logo';
import { Button } from '~shared/ui/button/button';
import { Link } from 'react-router-dom';
import { useScreenSize } from '~shared/lib';
import { ILinks } from './header.types';

export const Header = ({ ...props }) => {
  const classes = 'wide h-24 flex items-center justify-between';
  const screenSize = useScreenSize();
  const logoParams = {
    position: 'right' as const,
    name: 'load'
  };
  const links: Array<ILinks> = [
    { key: 'about', label: 'About Me' },
    { key: 'skills', label: 'Skills' },
    { key: 'project', label: 'Project' },
    { key: 'contacts', label: 'Contact me' }
  ];

  return (
    <header {...props} className={classes}>
      <Link to="/" className="flex gap-3 items-center hover:text-neutral group ">
        <SvgLogo name="header-logo" width="24" height="36" viewBox="0 0 24 36" className="group-hover:fill-neutral" />
        <span className="text-ml font-bold">Personal</span>
      </Link>

      <nav className="hidden sm:block">
        <ul className="flex items-center gap-8 font-semibold md:text-ml text-s">
          {links.map((link) => (
            <li key={link.key} className="hover:text-neutral">
              <Link to={`/#${link.key}`}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {screenSize.width >= 640 ? (
        <Button
          className="hidden sm:flex hover:bg-neutral"
          svgClasses="group-active:stroke-black [&>path]:group-active:stroke-black"
          label="Resume"
          size="medium"
          logo={logoParams}
          isHideLabel={screenSize.width < 767}
        />
      ) : (
        <button className="block sm:hidden group">
          <SvgLogo name="burger" width="27" height="18" viewBox="0 0 27 18" className="group-hover:fill-neutral" />
        </button>
      )}
    </header>
  );
};
