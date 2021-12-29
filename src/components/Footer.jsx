const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="text-center text-capitalize">
        Task N Reward &copy; {year}
      </footer>
    </>
  );
};

export default Footer;
