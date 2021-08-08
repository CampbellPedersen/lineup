import { useRouting } from "@src/routes";
import React from "react";
import { EditHeader } from "./components/EditHeader";
import "./Edit.scss";

export const Edit: React.FC = () => {
  const routing = useRouting();
  return (
    <div>
      <EditHeader onBack={routing.goBack} />
      <section className="edit"></section>
    </div>
  );
};
