import { useEffect, useState } from "react";

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const controller = new AbortController();

    const onChange = () => setMatches(media.matches);
    onChange();
    media.addEventListener("change", onChange, {
      signal: controller.signal,
    });

    return () => controller.abort();
  }, [query]);

  return matches;
};
