import { useState } from "react";
import "../Components/style/Accordion.css";

interface AccordionProps {
  title: string;
  content: string;
}
interface AccordionState {
  isActive: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isActive, setIsActive] = useState<AccordionState["isActive"]>(false);
  return (
    <section className="accordion-card" key={Math.random()}>
      <div className="header" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <p className="icon">{isActive ? "-" : "+"}</p>
      </div>
      {isActive && <div className="content">{content}</div>}
    </section>
  );
};

export default Accordion;
