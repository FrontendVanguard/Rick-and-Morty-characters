import React, { useEffect, useState } from "react";

import { ScrollContainer } from "./styles";

export const ButtonScrollToTop = () => {
  const [isVisible, setisVisible] = useState(false);

  const onScroll = () => {
    window.pageYOffset > 200 ? setisVisible(true) : setisVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return isVisible ? (
    <ScrollContainer onClick={scrollToTop}>
      <span>^ Наверх</span>
    </ScrollContainer>
  ) : (
    <></>
  );
};
