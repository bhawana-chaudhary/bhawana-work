import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "../styles/global.module.scss";
import ReCAPTCHA from "react-google-recaptcha";

export default function WixoneFooter({
  handleShowThankYou = { handleFormSubmit },
}) {
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const messages = {
    name: {
      required: "Please enter your name",
      minlength: "Name should be at least 2 characters",
    },
    email: "Please enter a valid email",
    phone: "Please enter a valid phone number",
    subject: {
      minlength: "Subject should be at least 2 characters",
    },
    message: "Please enter your message",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    for (const field in formData) {
      if (messages[field] && messages[field].required && !formData[field]) {
        errors[field] = messages[field].required;
      } else if (
        messages[field] &&
        messages[field].minlength &&
        formData[field].length < 2
      ) {
        errors[field] = messages[field].minlength;
      } else if (
        field === "email" &&
        messages.email &&
        !validateEmail(formData.email)
      ) {
        errors.email = messages.email;
      } else if (
        field === "phone" &&
        messages.phone &&
        !validatePhone(formData.phone)
      ) {
        errors.phone = messages.phone;
      }
    }
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }
    console.log("Form submitted successfully!");
    handleShowThankYou();
  };
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^\d{10}$/;
    return regex.test(phone);
  };

  return (
    <>
      <footer
        className={`${Styles.wixone_footer} relative w-full bg-[#58bbbf] py-14`}
      >
        <div
          className={`${Styles.container} relative w-full py-0 px-[20px] mx-auto my-0 max-w-[1170px]`}
        >
          <div
            className={`${Styles.footer_content} relative w-full flex flex-wrap`}
          >
            <div className=" relative w-[50%] pr-6 ">
              <h2
                className={`text-[17px] relative text-black uppercase  font-sans font-extrabold leading-[1.05] pt-[20px] tracking-[3px] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[45px] before:h-[2px] before:bg-black mb-10 `}
              >
                Contact
              </h2>
              <p className=" relative text-[15px] font-sans font-light mb-6 text-black leading-[1.8] tracking-[0.4px] ">
                500 Terry Francine Street, <br /> San Francisco, CA 94158 ​​
              </p>
              <p className=" relative text-[15px] font-sans font-light mb-6 text-black leading-[1.8] tracking-[0.4px] ">
                <Link href="tel:123-456-7890" className=" block decoration-0">
                  Tel: 123-456-7890
                </Link>
                <Link href="fax:123-456-7890" className=" block decoration-0">
                  Fax: 123-456-7890
                </Link>
              </p>
              <p className=" relative text-[15px] font-sans font-light mb-6 text-black leading-[1.8] tracking-[0.4px] ">
                info@mysite.com
              </p>
              <p className=" copyright relative w-full max-w-[220px] text-[14px] font-sans font-light text-black leading-[1.8] tracking-[0.4px] ">
                © 2035 by Personal Life Coach. Powered and secured by
                <Link href="/" className=" relative ml-1 underline ">
                  Wix
                </Link>
              </p>
            </div>
            <div className=" form_wrap relative w-[50%] ">
              <form
                action="/"
                className=" relative w-full "
                id="formValidation"
                onSubmit={handleFormSubmit}
              >
                <div className="wrap relative mb-5 mx-[5px] overflow-visible ">
                  <label
                    htmlFor="name"
                    className=" relative w-full inline-block  text-[16px] font-sans font-light text-black tracking-[0.4px] mb-2 "
                  >
                    Enter Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className=" relative w-full bg-transparent border-[2px] border-black border-solid outline-none py-[5px] px-[10px]  text-[15px] font-sans font-light text-black leading-[1.6] tracking-[0.4px]  focus:shadow-wixoneFooterShadow hover:shadow-wixoneFooterShadow transition duration-300 ease-in-out "
                  />
                  {formErrors.name && (
                    <p className=" text-[16px] text-red-600 mt-1 ">
                      {formErrors.name}
                    </p>
                  )}
                </div>
                <div className="wrap relative mb-5 mx-[5px] overflow-visible ">
                  <label
                    htmlFor="email"
                    className=" relative w-full inline-block  text-[16px] font-sans font-light text-black tracking-[0.4px] mb-2 "
                  >
                    Enter Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className=" relative w-full bg-transparent border-[2px] border-black border-solid outline-none py-[5px] px-[10px]  text-[15px] font-sans font-light text-black leading-[1.6] tracking-[0.4px]  focus:shadow-wixoneFooterShadow hover:shadow-wixoneFooterShadow transition duration-300 ease-in-out "
                  />
                  {formErrors.email && (
                    <p className=" text-[16px] text-red-600 mt-1 ">
                      {formErrors.email}
                    </p>
                  )}
                </div>
                <div className="wrap relative mb-5 mx-[5px] overflow-visible ">
                  <label
                    htmlFor="phone"
                    className=" relative w-full inline-block  text-[16px] font-sans font-light text-black tracking-[0.4px] mb-2 "
                  >
                    Enter Your Phone
                  </label>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className=" relative w-full bg-transparent border-[2px] border-black border-solid outline-none py-[5px] px-[10px]  text-[15px] font-sans font-light text-black leading-[1.6] tracking-[0.4px]  focus:shadow-wixoneFooterShadow hover:shadow-wixoneFooterShadow transition duration-300 ease-in-out "
                  />
                  {formErrors.phone && (
                    <p className=" text-[16px] text-red-600 mt-1 ">
                      {formErrors.phone}
                    </p>
                  )}
                </div>
                <div className="wrap relative mb-5 mx-[5px] overflow-visible ">
                  <label
                    htmlFor="subject"
                    className=" relative w-full inline-block  text-[16px] font-sans font-light text-black tracking-[0.4px] mb-2 "
                  >
                    Enter Your Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className=" relative w-full bg-transparent border-[2px] border-black border-solid outline-none py-[5px] px-[10px]  text-[15px] font-sans font-light text-black leading-[1.6] tracking-[0.4px]  focus:shadow-wixoneFooterShadow hover:shadow-wixoneFooterShadow transition duration-300 ease-in-out "
                  />
                  {formErrors.subject && (
                    <p className=" text-[16px] text-red-600 mt-1 ">
                      {formErrors.subject}
                    </p>
                  )}
                </div>
                <div className="wrap relative mb-5 mx-[5px] overflow-visible ">
                  <label
                    htmlFor="message"
                    className=" relative w-full inline-block  text-[16px] font-sans font-light text-black tracking-[0.4px] mb-2 "
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    value={formData.message}
                    onChange={handleInputChange}
                    className=" relative w-full bg-transparent border-[2px] border-black border-solid outline-none py-[5px] px-[10px]  text-[15px] font-sans font-light text-black leading-[1.6] tracking-[0.4px]  focus:shadow-wixoneFooterShadow hover:shadow-wixoneFooterShadow transition duration-300 ease-in-out h-full max-h-[133px] overflow-y-scroll scroll-behavior-smooth "
                  ></textarea>
                  {formErrors.message && (
                    <p className=" text-[16px] text-red-600 mt-1 ">
                      {formErrors.message}
                    </p>
                  )}
                </div>
                <div className="wrap relative mb-5 mx-[5px] overflow-visible ">
                  <label htmlFor="recaptcha" className="hidden">
                    reCAPTCHA
                  </label>
                  <ReCAPTCHA
                    sitekey="YOUR_RECAPTCHA_SITE_KEY"
                    onChange={handleRecaptchaChange}
                  />
                </div>
                <div className="wrap relative mb-5 mx-[5px] overflow-visible ">
                  <label htmlFor="submit" className=" hidden text-[0] ">
                    .
                  </label>
                  <input
                    type="submit"
                    value="Submit"
                    onClick={handleFormSubmit}
                    className={` cursor-pointer relative capitalize bg-black border-2 border-black px-[15px] py-[10px] text-[16px] text-white font-extralight inline-block tracking-[1px] hover:bg-white hover:text-black transition-colors duration-500`}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
