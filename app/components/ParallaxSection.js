import { useEffect } from "react";

const ParallaxSection = ({ bgImage, children, id }) => {
  useEffect(() => {
    const handleScroll = () => {
      const image = document.getElementById(id);
      if (image) {
        const scroll = window.scrollY;
        image.style.transform = `translateY(${scroll * 0.4}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id]);

  return (
    <section className="parallax-section">
      <div
        className="parallax-bg"
        id={id}
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="parallax-content">{children}</div>
    </section>
  );
};

export default ParallaxSection;
