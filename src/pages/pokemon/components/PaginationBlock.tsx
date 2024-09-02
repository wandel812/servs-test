import clsx from "clsx";
import React from "react";
import { Button } from "../../../components/Button";

type PaginationBlockPropsType = {
  haveNext: boolean;
  havePrev: boolean;
  onNext: () => void;
  onPrev: () => void;
};

export const PaginationBlock = ({
  haveNext,
  havePrev,
  onNext,
  onPrev,
}: PaginationBlockPropsType) => {
  return (
    <div className="flex justify-evenly items-center flex-row gap-x-10">
      <Button text="Back" onClick={onPrev} disabled={!havePrev} />
      <Button text="Next" onClick={onNext} disabled={!haveNext} />
    </div>
  );
};


