import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
    });
  }, []);

  return (
    <div>
      <h1>MedVox</h1>
      <h2>Your first AI assisted e-health platform</h2>
    </div>
  );
};

export default App;
