import Detail from "@/components/detail";
import NavigationBar from "@/components/navigation.bar";
import styles from "@/styles/details.module.css";
import React from "react";

export default function DetailPage(): JSX.Element {
  return (
    <div className={styles.main}>
      <div className="bg-white">
        <NavigationBar />
        <Detail />
      </div>
    </div>
  );
}
