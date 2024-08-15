import { useEffect, useState } from "react";

// Custom Hook - will be used in body component
const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  });

  return onlineStatus;
};

export default useOnlineStatus;
