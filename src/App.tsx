// import Counter from "./Components/Counter";

// import Testimonials from "./Components/Testimonials";

// import HiddenSearchBar from "./Components/HiddenSearchBar";

// import ToggleBackgroundColor from "./Components/ToggleBackgroundColor";

// import Calculator from "./Components/Calculator";

// import Meals from "./Components/Meals";

import Accordion from "./Components/Accordion";
import { accordionData } from "./utils/content";

const App = () => {
  return (
    <div>
      {/* <Calculator /> */}
      {/* <Meals /> */}
      {/* <Counter /> */}
      {/* <ToggleBackgroundColor /> */}
      {/* <HiddenSearchBar /> */}
      {/* <Testimonials /> */}
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;
