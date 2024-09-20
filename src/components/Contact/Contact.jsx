import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
          <a href="mailto:thuhoa08102003@gmail.com">thuhoa08102003@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/hoa-vo-thi-thu/">
            linkedin.com/in/hoa-vo-thi-thu
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/githubIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.github.com/thuhoa0810">github.com/thuhoa0810</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
