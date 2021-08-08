import { useRouting } from "@src/routes";
import React from "react";
import { Header } from "./components/Header";
import "./Edit.scss";

export const Edit: React.FC = () => {
  const routing = useRouting();
  return (
    <div>
      <Header onBack={routing.goBack} />
      <section className="edit"></section>
    </div>
  );
};
