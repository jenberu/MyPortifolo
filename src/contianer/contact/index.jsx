import { useState } from "react";
import PageHeaderContent from "../../components/pageheaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import "./style.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_olsw3sb", // Replace with your EmailJS service ID
        "template_dgts92m", // Replace with your template ID
        formData,
        "Rq9J14n6xLXfuMp1c" // Replace with your public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Form submitted successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error("FAILED...", err);
          toast.error("Failed to send message. Try again.");
        }
      );
  };
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <motion.h3
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="contact__content__header-text"
        >
          Let's Talk Me
        </motion.h3>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="contact__content__form"
        >
          <div className="contact__content__form__controlswrapper">
            <div>
              <input
                required
                name="name"
                className="inputName"
                value={formData.name}
                onChange={handleChange}
                type={"text"}
              />
              <label htmlFor="name" className="nameLabel">
                Your Name
              </label>
            </div>
            <div>
              <input
                required
                name="email"
                className="inputEmail"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="email" className="emailLabel">
                Your Email
              </label>
            </div>
            <div>
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="inputDescription"
                type={"text"}
                rows="5"
              />
              <label htmlFor="description" className="descriptionLabel">
                Your message...{" "}
              </label>
            </div>
          </div>
          <button type="submit">Send</button>
        </motion.form>
      </div>
    </section>
  );
};
export default Contact;
