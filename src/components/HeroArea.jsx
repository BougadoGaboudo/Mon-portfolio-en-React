import gsap from "gsap";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const HeroArea = ({ bg, page }) => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { opacity: 0 } });

    tl.fromTo(
      "#home",
      { autoAlpha: 0, duration: 1 },
      { autoAlpha: 1, opacity: 1 }
    )
      .fromTo(
        "#logo",
        { scale: 0, transformOrigin: "50% 50%" },
        { scale: 1, opacity: 1 }
      )
      .fromTo(
        "#illu",
        { xPercent: 100, duration: 2.5 },
        { xPercent: 0, opacity: 1 },
        "<0.5"
      )
      .fromTo(
        "#dev",
        { xPercent: -100, duration: 2.5 },
        { xPercent: 0, opacity: 1 },
        "<0.5"
      )
      .fromTo(
        "#button",
        { y: 100, duration: 1 },
        { y: 0, opacity: 1 },
        "-=0.3"
      );
  }, []);

  return (
    <section className={bg}>
      <div id={page}>
        <img id="logo" src="/img/NewLogo.png" alt="Logo" />
        <h1 id="illu">Illustrator . Character Design</h1>
        <h1 id="dev" className="mbot">
          Front Developer . Webdesigner
        </h1>
        <NavLink id="button" to="/gallery" className="primary-btn">
          See my work
        </NavLink>
      </div>
    </section>
  );
};

export default HeroArea;
