// import React from "react";
// import styles from "./page.module.css";
// import Image from "next/image";
// import Button from "@/components/button/Button";

// export const metadata = {
//   title: "Digifolio Contact Information",
//   description: "This is the contact page",
// };

// const Contact = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.title}>Let's keep in touches</div>
//       <div className={styles.content}>
//         <div className={styles.imgContainer}>
//           <Image
//             src="/contact.png"
//             alt="contact-img"
//             fill={true}
//             className={styles.img}
//           />
//         </div>
//         <form className={styles.form}>
//           <input type="text" placeholder="name" className={styles.input} />
//           <input
//             type="email"
//             placeholder="someone@email.com"
//             className={styles.input}
//           />
//           <textarea
//             className={styles.textArea}
//             placeholder="message"
//             cols={30}
//             rows={10}
//           ></textarea>
//           <Button url="#" text="send" />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

export const metadata = {
  title: "Digifolio Contact Information",
  description: "This is the contact page",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Let's keep in touches</div>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt="contact-img"
            fill={true}
            className={styles.img}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder='"name"' className={styles.input} />
          <input
            type="email"
            placeholder='"someone@email.com"'
            className={styles.input}
          />
          <textarea
            className={styles.textArea}
            placeholder='"message"'
            cols={30}
            rows={10}
          ></textarea>
          <Button url="#" text="send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
