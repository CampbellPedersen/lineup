import React from "react";
import { useHistory } from "react-router-dom";
import { Edit } from "./views/edit/Edit";
import { Execute } from "./views/execute";

type RouteName = "Execute" | "Edit";

type Route = {
  path: string;
  component: React.ComponentType<unknown>;
};

export const Routes: Record<RouteName, Route> = {
  Execute: {
    path: "/execute",
    component: Execute,
  },
  Edit: {
    path: "/edit",
    component: Edit,
  },
};

type Routing = {
  goToEdit: () => void;
  goToExecute: () => void;
  goBack: () => void;
};

export const useRouting = (): Routing => {
  const history = useHistory();

  return {
    goToEdit: () => history.push(Routes.Edit.path),
    goToExecute: () => history.push(Routes.Execute.path),
    goBack: history.goBack,
  };
};
