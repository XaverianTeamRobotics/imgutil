import React, { FC, ReactElement } from "react";
import { ImageUploader } from "./ImageUploader.tsx";
import { ImageViewer } from "./ImageViewer.tsx";

interface Props {

}

export const Dashboard: FC<Props> = (): ReactElement => {
  return (
    <React.Fragment>
      <div className={"w-screen h-screen bg-slate-700 dashboard overflow-auto"}>
        <div className={"flex flex-row"}>
          <div className={"shrink-0"}>
            <ImageUploader/>
          </div>
          <div className={"grow"}>
            <ImageViewer/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
