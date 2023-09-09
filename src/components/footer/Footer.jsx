import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Rajkrishna. All rights reserved.</div>
      <div>
        <div className={styles.imageContainer}>
          <Image
            src="/4.png"
            alt="image"
            height={15}
            width={15}
            className={styles.icon}
          />
          <Image
            src="/1.png"
            alt="image"
            height={15}
            width={15}
            className={styles.icon}
          />
          <Image
            src="/2.png"
            alt="image"
            height={15}
            width={15}
            className={styles.icon}
          />
          <Image
            src="/3.png"
            alt="image"
            height={15}
            width={15}
            className={styles.icon}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
