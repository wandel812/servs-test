import React from "react";
import { useLocation } from "react-router-dom";

export const useQueryParams = () => {
  const { search } = useLocation();
  const params = React.useMemo(() => new URLSearchParams(search), [search]);
  return params
};
