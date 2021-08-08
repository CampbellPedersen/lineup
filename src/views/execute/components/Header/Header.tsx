import React from "react";
import { LineupLogo } from "@src/components/Icons/LineupLogo";
import { Header as BaseHeader } from "@src/components/Header/Header";
import { SettingsIcon } from "@src/components/Icons/SettingsIcon";
import { ContentButton } from "@src/components/ContentButton";
import "./Header.scss";

type Props = {
  title: string;
  onEdit: () => void;
};

export const Header: React.FC<Props> = ({ title, onEdit }) => (
  <BaseHeader>
    <nav className="execute-header">
      <div className="heading">
        <LineupLogo height={24} width={24} />
        <span>{title}</span>
      </div>
      <ContentButton className="settings-button" onClick={onEdit}>
        <SettingsIcon height={20} width={20} />
      </ContentButton>
    </nav>
  </BaseHeader>
);
