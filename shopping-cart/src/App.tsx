import React from "react";

import CustomisationList from "./components/CustomisationList/CustomisationList";

const App: React.FC<any> = () => {
  return (
    <>
      <h1>Laptop Customisation Tool</h1>
      <CustomisationList />
    </>
  );
};

export default App;
