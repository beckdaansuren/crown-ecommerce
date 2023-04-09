import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./contact-us.styles.scss";
import ContactForm from "./contact-form.component";

class Contactus extends React.Component {
  render() {
    return (
      <div className="Contact-Us">
        {/* Social icons */}
        <a
          href="https://www.facebook.com/MGL.ZAR"
          className="facebook social"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>

        {/* ContactForm */}
        <ContactForm />
      </div>
    );
  }
}

export default Contactus;
