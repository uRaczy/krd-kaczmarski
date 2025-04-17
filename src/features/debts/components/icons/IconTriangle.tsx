type Props = {
  className?: string;
};

export const IconTriangle = ({ className = '' }: Props) => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 490 490'
    width='1em'
    height='1em'
    aria-hidden='true'
    focusable='false'
  >
    <polygon points='245,456.701 490,33.299 0,33.299' />
  </svg>
);
