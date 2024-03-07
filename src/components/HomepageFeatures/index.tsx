import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import React from "react";

type EventItem = {
  title: string;
  image: string;
  address: string;
};

const EventsList: EventItem[] = [
  {
    image:
      "https://www.firstevent.co.uk/wp-content/uploads/2022/07/Untitled-design-12.png",
    address: "Berlin, Germany",
    title: "Next Block Expo",
  },
  {
    image:
      "https://www.firstevent.co.uk/wp-content/uploads/2022/07/Untitled-design-12.png",
    address: "Berlin, Germany",
    title: "Next Block Expo",
  },
  {
    image:
      "https://www.firstevent.co.uk/wp-content/uploads/2022/07/Untitled-design-12.png",
    address: "Berlin, Germany",
    title: "Next Block Expo",
  },
];

function Event({ title, image, address }: EventItem) {
  return (
    <div className={clsx("col col--4", styles.eventItemWrapper)}>
      <div>
        <img className={styles.image} src={image} />
      </div>
      <div className={clsx(styles.wrapperEventInfo)}>
        <Heading as="h3">{title}</Heading>
        <p className={clsx(styles.address)}>{address}</p>
      </div>
    </div>
  );
}

export default function Events(): JSX.Element {
  return (
    <section className={styles.events}>
      <div className={clsx("text--center container", styles.wrapperTitle)}>
        <Heading as="h2" className={styles.title}>
          Event
        </Heading>
        <p className={styles.subTitle}>
          Come meet us in IRL. The Aleph Zero community is active across
          hackathons and events in the web3 space.
        </p>
      </div>
      <div className="container">
        <div className={clsx(styles.eventList)}>
          {EventsList.map((props, idx) => (
            <Event key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
