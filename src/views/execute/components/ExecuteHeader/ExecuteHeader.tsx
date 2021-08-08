import React from "react";
import { LineupLogo } from "@src/components/Icons/LineupLogo";
import { Header } from "@src/components/Header/Header";
import { SettingsIcon } from "@src/components/Icons/SettingsIcon";
import { ContentButton } from "@src/components/ImageButton";
import "./ExecuteHeader.scss";

type Props = {
  onEdit: () => void;
};

export const ExecuteHeader: React.FC<Props> = ({ onEdit }) => (
  <Header>
    <nav className="execute-header">
      <LineupLogo height={24} width={24} />
      <ContentButton className="settings-button" onClick={onEdit}>
        <SettingsIcon height={20} width={20} />
      </ContentButton>
    </nav>
  </Header>
);
