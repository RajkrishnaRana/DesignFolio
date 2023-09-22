import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          fill={true}
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storyteller</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award &quot;winnig&quot; experience
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.items}>
          <h1 className={styles.title}> Who we are ?</h1>
          <p className={styles.desc}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
            <br />
            <br />
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
            Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
            written in 45 BC. This book is a treatise on the theory of ethics,
            very popular during the Renaissance. The first line of Lorem Ipsum,
            "Lorem ipsum dolor sit amet..", comes from a line in section
            1.10.32.
          </p>
        </div>
        <div className={styles.items}>
          <h1 className={styles.title}> Who we do ?</h1>
          <p className={styles.desc}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words,
            <br />
            <br /> consectetur, from a Lorem Ipsum passage, and going through
            the cites of the word in classical literature, discovered the
            undoubtable source. 1.10.32.
          </p>
          <Button text="Contact" url="/contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
