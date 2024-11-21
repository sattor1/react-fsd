import { IFooterProps } from './footer.types';

export const Footer = ({ ...props }: IFooterProps) => {
  const classes = 'wide';

  return (
    <footer {...props} className={classes}>
      <h2>Footer</h2>
    </footer>
  );
};
