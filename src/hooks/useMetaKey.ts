import { useEffect, useState } from "react";

const useMetaKey = (): string => {
  const [metaKey, setMetaKey] = useState("⌘"); // Default to Mac command key

  useEffect(() => {
    const isMac = navigator.userAgent.toLowerCase().includes("mac");
    setMetaKey(isMac ? "⌘" : "Ctrl");
  }, []);

  return metaKey;
};

export default useMetaKey;
