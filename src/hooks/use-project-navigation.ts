import { useState } from "react";

const UseProjectNavigation = (initialOption = 0) => {
  const [projectIndex, setprojectIndex] = useState(initialOption);

  const navigateTo = (to) => {
    setprojectIndex(to);
  };

  return [projectIndex, navigateTo];
};

export default UseProjectNavigation;
