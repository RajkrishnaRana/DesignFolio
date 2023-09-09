import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry
        </p>
        <Button text="See our works" url="./portfolio" />
      </div>
      <div className={styles.item}>
        <Image
          src="/hero.png"
          alt="hero"
          height={500}
          width={500}
          className={styles.images}
        />
      </div>
    </div>
  );
};

export default Home;
