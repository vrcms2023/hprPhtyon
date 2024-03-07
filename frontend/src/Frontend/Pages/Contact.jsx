import React, { useEffect } from "react";
import Title from "../../Common/Title";
import BriefIntro from "../../Common/BriefIntro";
import "./Contact.css";

import { removeActiveClass } from "../../util/ulrUtil";
import UserContactForm from "./UserContactForm";

const Contact = () => {
  useEffect(() => {
    removeActiveClass();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="headerBottomMargin">
        <div className="banner contactBanner"></div>
      </div>

      {/* Introduction */}
      <BriefIntro title="Share your views">
        We believe that construction is a man made wonder. The thought of
        bringing imagination to real life structures excites us, each day the
        passion in us grows as we contribute to this industry.
      </BriefIntro>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 text-white d-flex justify-content-start align-items-start blueBg-500 p-5 py-3 p-md-5">
            <div className="address`">
              <Title title="Address" cssClass="" />
              <Title
                title="We’d Love to Hear From You, Get In Touch With Us!"
                cssClass="fs-6 mb-4"
              />
              <p className="mb-5">
                101, Silicon Towers, <br />
                Image Garden Road, <br />
                Madhapur, <br />
                Hyderabad - 500081
              </p>

              <Title title="Phone Number" cssClass="" />
              <p>40-40036841</p>

              <Title title="Email Id" cssClass="" />
              <p>
                <a
                  href="mailto:hprinfrallp@gmail.com"
                  className="fs-6 text-white"
                >
                  {" "}
                  hprinfrallp@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="col-md-8 d-flex justify-content-center align-items-center flex-column">
          <UserContactForm />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <iframe
              className="googlemap"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15226.413145928846!2d78.441906!3d17.430816!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x80e4d67809745a48!2sHPR+INFRA+PROJECTS!5e0!3m2!1sen!2sin!4v1442574301202"
              height="450"
              width="100%"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
