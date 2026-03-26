import React from "react";
import me from "./assets/me.png";
import image from "./assets/image.png";

import Usercard from "./components/usercard";
const App = () => {
  return (
    <div>
      <h1>hello </h1>
      <Usercard name="Shredhaya Goel" />
      <Usercard name="Shredhaya Goel" />
      <Usercard name="Shredhaya Goel" />
      <Usercard
        name="Shredhaya Goel "
        image1={image}
        desc={"hello I am SHREDHAYA GOEL"}
      />
      <Usercard name="Shredhaya Goel" image={me} />
    </div>
  );
};

export default App;
