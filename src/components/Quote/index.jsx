import React from "react";
import Spacer from "../Global/Spacer";
import Heading from "../Global/Heading";

const Quote = () => {
  return (
    <div className="quote-section">
      <section className="flex flex-row flex-align-center flex-space-around">
        <div className="quote-left">
          <form action="" method="post" id="quote-form">
            <h3 className="form-heading">your details</h3>
            <input type={"text"} id="first-name" placeholder="First Name" />
            <input type={"text"} id="last-name" placeholder="Last Name" />
            <input type={"email"} id="email" placeholder="Email" />
            <input type={"text"} id="phone" placeholder="Phone" />
            <input type={"text"} id="company-name" placeholder="Company Name" />
            <span className="form-message">
              We service orders from 25-5000+ units.
            </span>
            <Spacer height={50} />
            <h3 className="form-heading">colours in your logo</h3>
            <div className="checkboxes-group">
              <label>
                <input type={"checkbox"} value="1-colour" id="checkbox-1" />
                1Colour
              </label>
              <label>
                <input type={"checkbox"} value="2-colour" id="checkbox-2" />
                2Colours
              </label>
              <label>
                <input type={"checkbox"} value="3-colour" id="checkbox-3" />
                3Colours
              </label>
              <label>
                <input type={"checkbox"} value="4+colour" id="checkbox-4" />
                4Colours
              </label>
            </div>
            <span className="form-message">
              If you don’t have a logo, leave blank.
            </span>
            <h3 className="form-heading">UPLOAD A LOGO (OPTIONAL)</h3>
            <span className="form-message">
              drag here or <b>browse</b>
            </span>
            <input type={"file"} id="upload-artword" />
            <label>
              <input
                type={"checkbox"}
                value="I consent to being contacted using these details."
                id="consent-check"
              />
              I consent to being contacted using these details.
            </label>
            <input
              type={"submit"}
              value="click here to submit"
              id="submit-form"
            />
          </form>
        </div>
        <div className="quote-right">
          <Heading
            style={{ borderColor: "var(--green)", color: "var(--green)" }}
            title={"get a free quote"}
          />
          <Spacer height={160} />
          <p>
            Fill in our form and let us know your requirements. If you upload
            artwork, we will send over a free mock-up to showcase your work on
            the selected product.
            <br /> We offer some of the lowest industry prices and can create
            products to your exact specification.
          </p>
          <Spacer height={50} />
          <h3>GOT MORE QUESTIONS?</h3>
          <Spacer height={30} />
        </div>
      </section>
    </div>
  );
};
export default Quote;
