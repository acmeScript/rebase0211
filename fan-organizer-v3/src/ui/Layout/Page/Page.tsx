import React, { useState } from "react";
import { Heading } from "grommet";
import { Content } from "../../../context/routes-context";
import { useScrollPosition } from "../../../helpers/useScrollPosition";
import { useDocumentTitle } from '../../documentTitle';

const base = "Fan organizer v2";

export const Page: React.FunctionComponent<{
  title?: string;
  documentTitle?: string;
}> = ({ title, documentTitle, children }) => {

  const [showInHeader, setShowInHeader] = useState(false);
  useDocumentTitle(documentTitle ? `${documentTitle} | ${base}` : base);
  
  useScrollPosition({
    effect: offset => {
      setShowInHeader(offset > 100);
    },
  });
  return (
    <>
      <Content name="toolbar/left">
        {title}
      </Content>
      {title ? (
        <Heading style={{ margin: 0, marginBottom: 20 }}>{title}</Heading>
      ) : null}

      {children}
    </>
  );
};
