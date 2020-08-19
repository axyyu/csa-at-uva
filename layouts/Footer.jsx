const Footer = (props) => {
  return (
    <footer>
      <button onClick={() => props.openNewsletter()}>
        Join Our Newsletter
      </button>
    </footer>
  );
};

export default Footer;
