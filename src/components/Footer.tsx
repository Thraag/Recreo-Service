
import "../index.css"
function Footer() {
  return (
    <div className="container mt-5">
      <footer className="text-center text-white">
        <div className="container pt-4">
          {/* MAIL */}
          <section className="mb-4">
            <a
              className="btn-link btn-floating btn-lg m-1"
              href="mailto:awsjoaquinperez@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fa-solid fa-envelope mx-2 text-light"></i>
            </a>
            {/* Linkedin */}
            <a
              className="btn-link btn-floating btn-lg m-1"
              href="https://www.linkedin.com/in/joaquinperezortiz/"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fa-brands fa-linkedin mx-2 text-light"></i>
            </a>
            {/* Github */}
            <a
              className="btn-link btn-floating btn-lg m-1"
              href="https://github.com/Thraag?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fa-brands fa-github mx-2 text-light"></i>
            </a>
          </section>
        </div>
        {/* Copyright */}
        <div className="text-center text-light p-3">
          © 2024 Copyright:
          <a className="text-light" href="https://mdbootstrap.com/">www.awsjoaquinperez.com</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
