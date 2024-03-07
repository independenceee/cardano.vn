import clsx from "clsx";
import Title from "@site/src/components/Title";
import styles from "./Events.module.scss";
import React from "react";
import { EventItem } from "@site/src/types/Generics";
import Event from "./Event";

const EventsList: EventItem[] = [
  {
    image: "https://media-public.canva.com/NRg_A/MAEhCANRg_A/1/tl.png",
    address: "Berlin, Germany",
    title: "Next Block Expo",
  },
  {
    image: "https://media-public.canva.com/NRg_A/MAEhCANRg_A/1/tl.png",
    address: "Berlin, Germany",
    title: "Next Block Expo",
  },
  {
    image: "https://media-public.canva.com/NRg_A/MAEhCANRg_A/1/tl.png",
    address: "Berlin, Germany",
    title: "Next Block Expo",
  },
];

export default function Events(): JSX.Element {
  return (
    <section className={styles.events}>
      <Title
        title="Event"
        subTitle="Come meet us in IRL. The Aleph Zero community is active
                    across hackathons and events in the web3 space."
      />
      <div className="container">
        <div className={clsx(styles.eventList)}>
          {EventsList.map((event, idx) => (
            <Event event={event} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
