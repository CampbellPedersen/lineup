import React from "react";
import { LineupLogo } from "@src/components/Icons/LineupLogo";
import { Header } from "@src/components/Header/Header";
import { SettingsIcon } from "@src/components/Icons/SettingsIcon";
import { CircleButton } from "@src/components/CircleButton";
import "./ExecuteHeader.scss";

export const ExecuteHeader: React.FC = () => (
  <Header>
    <nav className="execute-header">
      <LineupLogo height={24} width={24} />
      <CircleButton className="settings-button" onClick={console.log}>
        <SettingsIcon height={20} width={20} />
      </CircleButton>
    </nav>
  </Header>
);
