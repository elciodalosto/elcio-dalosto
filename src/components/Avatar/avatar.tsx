import React from "react";
import clsx from "clsx";
import styles from "./avatar.module.css";
import avatar from "@site/static/img/avatar.png";
import { useHistory } from "react-router-dom";

export default function Avatar() {
  const [isAnimating, setIsAnimating] = React.useState(false);
  const history = useHistory();

  const handleText = () => {
    setIsAnimating(true);
    setTimeout(() => {
      history.push("/about");
    }, 2000);
  };

  return (
    <div className={clsx("col col--12")}>
      <div className="text--center">
        <img
          className={`${styles.avatar} ${isAnimating ? styles.fadeOut : ""}`}
          role="img"
          src={avatar}
          onClick={handleText}
        />
      </div>
    </div>
  );
}
