import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="p-2 m-2 border border-black">
      <h3 className="font-bold">{title}</h3>
      <button
        onClick={() => {
          setIsVisible();
        }}
      >
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        title={"About instamart"}
        description={"This is the about section of instamart"}
        isVisible={visibleSection === "about"}
        setIsVisible={() => {
          setVisibleSection("about");
        }}
      />
      <Section
        title={"Team instamart"}
        description={"The team has 20 members"}
        isVisible={visibleSection === "team"}
        setIsVisible={() => {
          setVisibleSection("team");
        }}
      />
      <Section
        title={"Career instamart"}
        description={"Careers at instamart"}
        isVisible={visibleSection === "career"}
        setIsVisible={() => {
          setVisibleSection("career");
        }}
      />
    </div>
  );
};

export default Instamart;
