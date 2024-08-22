"use client";
import React from "react";
import { sendUserQuestion } from "@services/userService";
const ContactForm = () => {
  const onSubmit = async (formData) => {
    const res = await sendUserQuestion(formData);
    console.log(res);
  };
  return (
    <section className="section section-padding contact-background m-b-0">
      <div className="section-container small">
        <div className="block block-contact-form">
          <div className="block-widget-wrap">
            <div className="block-title">
              <h2>Send Us Your Questions!</h2>
              <div className="sub-title">
                We’ll get back to you within two days.
              </div>
            </div>
            <div className="block-content">
              <form action={onSubmit} className="contact-form">
                <div className="contact-us-form">
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <label className="required">Name</label>
                      <br></br>
                      <span className="form-control-wrap">
                        <input
                          type="text"
                          name="name"
                          size="40"
                          className="form-control"
                          aria-required="true"
                        />
                      </span>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <label className="required">Email</label>
                      <br></br>
                      <span className="form-control-wrap">
                        <input
                          type="email"
                          name="email"
                          size="40"
                          className="form-control"
                          aria-required="true"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <label className="required">Message</label>
                      <br></br>
                      <span className="form-control-wrap">
                        <textarea
                          name="message"
                          cols="40"
                          rows="10"
                          className="form-control"
                        ></textarea>
                      </span>
                    </div>
                  </div>
                  <div className="form-button">
                    <input type="submit" value="Submit" className="button" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
