import React, { ReactNode } from "react";
import styles from "./Event.module.scss";
import { EventItem } from "@site/src/types/Generics";
import clsx from "clsx";
import Heading from "@theme/Heading";

type Props = {
  event: EventItem;
};

function Event({ event }: Props) {
  return (
    <div className={clsx("col col--4", styles.eventItemWrapper)}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={event.image} />
      </div>
      <div className={clsx(styles.wrapperEventInfo)}>
        <Heading as="h3">{event.title}</Heading>
        <p className={clsx(styles.address)}>{event.address}</p>
      </div>
    </div>
  );
}

export default Event;
