import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";
import Image from "next/image";
import Style from "../styles/bright-code.module.scss";
import Globalcss from "../styles/global.module.scss";

export default function brightContactForm() {
  // const [state, handleSubmit] = useForm("meqbykyv");
  // if (state.succeeded) {
  //   return <p>Thanks for joining!</p>;
  // }
  return (
    <>
      <section className={Style.brightContactForm}>
        <div className={Globalcss.brightContainer}>
          <div className={Style.contactFormWithText}>
            <div className={Style.brightIntro}>
              <div className={Style.introContent}>
                <h6>GET IN TOUCH</h6>
                <h2>Let&#39;s talk about your project</h2>
                <p>
                  You are welcome to fill in the form, and our web experts will
                  reach out to you during business hours to discuss your
                  project.
                </p>
              </div>
            </div>
            <div className={Style.form_wrap}>
              <form action="">
                <div className={Style.wrap}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" />
                </div>
                <div className={Style.wrap}>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" />
                </div>
                <div className={Style.wrap}>
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" />
                </div>
                <div className={Style.wrap}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <iframe
                  title="reCAPTCHA"
                  width="304"
                  height="78"
                  role="presentation"
                  name="a-c5g08lrqqa4b"
                  frameborder="0"
                  scrolling="no"
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                  src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=%226LcErSkpAAAAAG2t265EJqdbD7fXAzPEo4-nyCF9%22%3B&amp;co=aHR0cHM6Ly9tYXN0ZXIuZDJleDB4cHlsMWEwcDQuYW1wbGlmeWFwcC5jb206NDQz&amp;hl=en&amp;type=image&amp;v=-QbJqHfGOUB8nuVRLvzFLVed&amp;theme=light&amp;size=normal&amp;badge=bottomright&amp;cb=paqg8ncv9tjc"
                ></iframe>
                <button type="submit" className={Globalcss.border_btn}>
                  Submit
                </button>
                {/* <div className="bg-slate-100 flex flex-col">
                  <div className="text-red-600 px-5 py-2">Error Message</div>
                </div> */}
              </form>
              {/* <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" name="email" />j
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <textarea id="message" name="message" />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                  Submit
                </button>
              </form> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
