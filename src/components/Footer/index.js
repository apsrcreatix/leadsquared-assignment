const Footer = () => (
  <footer
    className="bg-primary text-white p-4"
    style={{
      margin: "0 -15px",
    }}
  >
    <div className="row">
      <div className="col-xl-6 col-12 text-xl-left text-center">
        <div
          className="h5 px-1 text-uppercase font-weight-bold mb-0"
          style={{ letterSpacing: "2px" }}
        >
          Shop Express
        </div>
        <p className="lead px-1 mb-0" style={{ fontSize: "10px" }}>
          Shop Limitless, Live Tensionless
        </p>
      </div>
      <div className="col-xl-6 col-12">
        <div className="text-xl-right text-center mb-0 w-100">
          <small>
            A product by{" "}
            <a className="text-white" href="https://github.com/apsrcreatix">
              apsrcreatix
            </a>{" "}
            © All Rights Reserved
          </small>
          <p className="lead px-1 mb-0" style={{ fontSize: "10px" }}>
            Made with ☮️ in India
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
