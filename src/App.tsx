import React, { FC, ReactElement } from "react";
import { Display } from "./app/Display.tsx";

interface Props {

}

export const App: FC<Props> = (): ReactElement => {
  return (
    <React.Fragment>
      <Display/>
    </React.Fragment>
  );
};
