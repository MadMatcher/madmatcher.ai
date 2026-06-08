import { useEffect } from "react";

const usePageTitle = (pageName) => {
  useEffect(() => {
    const title = pageName ? `MM | ${pageName}` : "MadMatcher";
    document.title = title;
  }, [pageName]);
};

export default usePageTitle;
