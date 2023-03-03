import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="grid grid-3-columns-footer">
        <div className="about-app">
          <h4>Weather App</h4>
          <hr />
          <p>
            This weather app is made for general use. It is free and everyone
            can access it. Feel free to write me an email or contact meif you
            find this application useful.
          </p>
        </div>
        <div className="about-me">
          <h4>About me</h4>
          <hr />
          <p>
            Hi! My name is Anna and I come from Poland. I'm front-end developer
            based in Europe. I'm currently living in Norway, Oslo. If you like
            the weather app, feel free to check my other projects. 🌞
          </p>
        </div>
        <div className="about-page">
          <h4>About the page</h4>
          <hr />
          <p>
            I created this page as a part of
            <a
              href="https://www.shecodes.io"
              title="SheCodes Website"
              target="_blank"
              rel="noreferrer"
            >
              SheCodes
            </a>
            Challenge project to develop my coding skills. This project was
            coded by Anna Kuliga and is
            <a
              href="https://github.com/AnnaKuliga/pop-star-project"
              title="GitHub Pop Star Project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced
            </a>
            .
          </p>
        </div>
      </section>
      <div className="links">
        <hr />
        <div className="footer-links">
          <div className="row" id="contact-info">
            <class className="col-sm-3 text-center">
              <a href="mailto:a.kuliga2@gmail.com" title="Email me">
                <i className="fa-regular fa-envelope"></i>
                <span className="email">a.kuliga2@gmail.com</span>
              </a>
            </class>
            <class className="col-sm-3 text-center">
              <span className="phone-nr">
                <i className="fa-solid fa-phone"></i> +48 785 036 017
              </span>
            </class>

            <class className="col-sm-2 text-center">
              <a
                href="https://www.shecodes.io/graduates/57519-anna-kuliga"
                target="_blank"
                rel="noreferrer"
                title="SheCodes Anna's Profile"
              >
                <i className="fa-solid fa-graduation-cap"></i>
              </a>
            </class>
            <class className="col-sm-2 text-center">
              <a
                href="https://www.linkedin.com/in/anna-kuliga-967186224/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn Anna"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </class>
            <class className="col-sm-2 text-center">
              <a
                href="https://github.com/AnnaKuliga"
                target="_blank"
                rel="noreferrer"
                title="GitHub Anna"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </class>
          </div>
        </div>
      </div>
    </footer>
  );
}
