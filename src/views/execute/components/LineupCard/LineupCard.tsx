import React from "react";
import { Lineup } from "@src/models/task";
import "./LineupCard.scss";

type Props = {
  lineup: Lineup;
};

export const LineupCard: React.FC<Props> = ({ lineup, children }) => (
  <div className="lineup-card">
    <span className="name">{lineup.name}</span>
    {children}
  </div>
);
