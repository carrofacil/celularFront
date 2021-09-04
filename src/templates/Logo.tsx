type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-100 inline-flex items-center ${fontStyle}`}>
      <img src="./apple.png" alt="" style={{ width: '44px' }} />
      Iphone 13
    </span>
  );
};

export { Logo };
