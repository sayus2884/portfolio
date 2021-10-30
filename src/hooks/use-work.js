import { useCallback, useState } from "react";

const UseWork = () => {
  const [selectedWork, setSelectedWork] = useState({});

  return { selectedWork, setSelectedWork };
};

export default UseWork;
