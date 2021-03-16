import React from "react";
import { AreaProvider } from "../context/routes-areaProvider-context";
import { BrowserRouter } from "react-router-dom";

export const Root: React.FunctionComponent<{}> = ({ children }) => {
  return (
    <AreaProvider>
        <BrowserRouter>
            {children}
        </BrowserRouter>
    </AreaProvider>
  );
};
