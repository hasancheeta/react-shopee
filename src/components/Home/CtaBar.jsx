import React from "react";
import DualButton from "../Global/DualButton";

const CtaBar = () => {
  return (
    <div className="full-width-cta flex flex-column flex-justify-center">
      <section className="flex flex-row flex-align-center flex-space-between">
        <div className="cta-col1 flex flex-row flex-align-center flex-space-between">
          <div className="cta-point flex flex-row flex-align-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path
                d="M7.99052 34H0V18.7H3.40022L7.99052 34ZM30.6003 11.9H20.4013V5.1C20.4013 3.7474 19.864 2.45019 18.9075 1.49376C17.951 0.53732 16.6537 0 15.301 0H13.6009V6.8L8.67056 12.9625C7.46031 14.4753 6.8008 16.3547 6.80044 18.292V20.4L10.3707 32.3H24.5445C26.0613 32.3001 27.5345 31.7933 28.7301 30.8599C29.9256 29.9266 30.7748 28.6204 31.1426 27.149L33.8985 16.1245C34.0238 15.6233 34.0332 15.1001 33.926 14.5947C33.8189 14.0893 33.5979 13.615 33.28 13.2078C32.962 12.8005 32.5555 12.4711 32.0911 12.2445C31.6268 12.0179 31.117 11.9001 30.6003 11.9Z"
                fill="white"
              ></path>
            </svg>
            <h2 className="cta-heading">
              Show off your brand <br />
              the right way
            </h2>
          </div>
          <div className="cta-point flex flex-row flex-align-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="34"
              viewBox="0 0 33 34"
              fill="none"
            >
              <path
                d="M33 25.6429C33 29.98 29.48 33.5 25.1429 33.5C20.8057 33.5 17.2857 29.98 17.2857 25.6429C17.2857 21.3057 20.8057 17.7857 25.1429 17.7857C29.48 17.7857 33 21.3057 33 25.6429ZM8.64286 9.14286H14.6143L9.42857 0.5L0 16.2143H8.64286V9.14286ZM23.5714 15.5621V11.5H11V24.0714H15.0621C15.3982 21.9354 16.4029 19.9609 17.9319 18.4319C19.4609 16.9029 21.4354 15.8982 23.5714 15.5621Z"
                fill="white"
              ></path>
            </svg>
            <h2 className="cta-heading">
              Customise your <br />
              merchandise
            </h2>
          </div>
          <div className="cta-point flex flex-row flex-align-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M16 0C7.1632 0 0 7.1632 0 16C0 24.8368 7.1632 32 16 32C24.8368 32 32 24.8368 32 16C32 7.1632 24.8368 0 16 0ZM16 28.8L19.2 25.6L20.8 24V20.8H17.6V19.2L16 17.6H11.2V22.4L14.4 25.6V28.6896C8.096 27.8976 3.2 22.5152 3.2 16L4.8 17.6H8V14.4H11.2L16 9.6V6.4H12.8L11.2 4.8V4.1424C14.277 2.88765 17.723 2.88765 20.8 4.1424V6.4L19.2 8V11.2L20.8 12.8L25.808 7.792C27.0263 9.24949 27.9041 10.9604 28.3776 12.8H25.6L22.4 16V19.2L24 20.8H27.2L27.6576 21.2576C25.6464 25.6976 21.1824 28.8 16 28.8Z"
                fill="white"
              ></path>
            </svg>
            <h2 className="cta-heading">
              Low cost <br />
              shipping
            </h2>
          </div>
        </div>
        <div className="cta-col2 flex flex-row flex-justify-center">
          <DualButton
            style={{ color: "var(--pink)" }}
            title={"View all products"}
            url={"#"}
          />
        </div>
      </section>
    </div>
  );
};
export default CtaBar;
