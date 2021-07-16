import { Router } from "next/router";
import React, { createContext, useState, ReactNode } from "react";
import { LoadingType } from "~/models";

export const LoadingPageContext = createContext({} as LoadingType);

type Props = {
  children?: ReactNode;
};

export const LoadingPageProvider: React.FC<Props> = (props) => {
  const { children } = props;
  const [loadingPage, setLoadingPage] = useState<boolean>(false);

  Router.events.on("routeChangeStart", () => {
    setLoadingPage(true);
  });
  Router.events.on("routeChangeComplete", () => setLoadingPage(false));
  Router.events.on("routeChangeError", () => setLoadingPage(false));

  return (
    <LoadingPageContext.Provider value={{ loadingPage, setLoadingPage }}>
      {children}
    </LoadingPageContext.Provider>
  );
};

export default { LoadingPageContext, LoadingPageProvider };
