import React, { useEffect, useMemo, useState } from "react";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import clsx from "clsx";
import { loadSlim } from "@tsparticles/slim";

import styles from "./Hero.module.scss";
const Hero = function () {
  const [init, setInit] = useState(false);
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: any = useMemo(
    () => ({
      fullScreen: false,
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 165,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 1,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        zIndex: -1,
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 100,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "outside",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 200,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 6 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      {init && (
        <Particles
          id={clsx(styles.tsparticles)}
          particlesLoaded={particlesLoaded}
          options={options}
          style={{
            width: "100%",
            height: "100vh",
            position: "absolute",
            inset: 0,
          }}
        />
      )}
      <div className={clsx("container", styles.heroContentContainer)}>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx(
              "button button--secondary button--lg",
              styles.button
            )}
            href="/docs/intro"
          >
            <span className={clsx(styles.toggleText)}>
              Cardano Blockchain&nbsp;
            </span>
            Certified Associate
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Hero;
