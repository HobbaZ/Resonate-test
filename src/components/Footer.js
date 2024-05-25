//Change year automatically
function year() {
  let date = new Date();
  return date.getFullYear();
}

const Footer = () => {
  return (
    <>
      <div className="container fluid">
        <footer className="fixed-bottom text-center">
          <div className="footerStyle">
            <p>Resonate Test, {year()}</p>
            <div className="iconDiv">
              <i className="fab fa-linkedin icon"></i>
              <i className="fas fa-envelope-square icon"></i>
              <i className="fab fa-github icon"></i>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
