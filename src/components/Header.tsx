const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[90%] gap-4 text-center text-white mt-[88px] md:mt-0 md:text-left md:items-start">
      <h1 className="text-2xl md:text-4xl font-bold leading-[36px]">
        Learn to code by watching others
      </h1>
      <p className="text-base font-light leading-[26px]">
        See how experienced developers solve problems in real-time. Watching scripted
        tutorials is great, but understanding how developers think is invaluable.{' '}
      </p>
    </div>
  );
};

export default Header;
