import { useState, useEffect } from "react";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleMediaQueryChange = (e) => {
      setMatches(e.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    setMatches(mediaQuery.matches);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
