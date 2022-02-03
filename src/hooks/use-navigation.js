import { useCallback, useState } from "react";

const UseNavigation = (initialOption = 0) => {
  const [current, setCurrent] = useState(initialOption);

  const navigateTo = (to) => {
    setCurrent(to);
  };

  return [current, navigateTo];
};

export default UseNavigation;
