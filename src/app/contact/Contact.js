import React from "react";
import ContactMap from "@component/contact/ContactMap";
import ContactInfo from "@component/contact/ContactInfo";
import ContactForm from "@component/contact/ContactForm";

const Contact = () => {
  return (
    <div className="page-contact">
      <ContactMap />
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contact;
