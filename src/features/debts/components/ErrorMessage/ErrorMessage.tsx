import './ErrorMessage.styles.less';

type Props = {
  error: string | null;
};

export const ErrorMessage = ({ error }: Props) => {
  if (!error) return null;

  return (
    <div className='error-message'>
      <p>{error}</p>
    </div>
  );
};
