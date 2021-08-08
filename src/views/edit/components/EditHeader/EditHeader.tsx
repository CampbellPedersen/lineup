import React from "react";
import { Header } from "@src/components/Header/Header";
import { ContentButton } from "@src/components/ImageButton";
import "./EditHeader.scss";
import { BackIcon } from "@src/components/Icons/BackIcon";

type Props = {
  onBack: () => void;
};

export const EditHeader: React.FC<Props> = ({ onBack }) => (
  <Header>
    <nav className="edit-header">
      <ContentButton className="back-button" onClick={onBack}>
        <BackIcon height={26} width={26} />
      </ContentButton>
      <span className="heading">Edit Lineups</span>
    </nav>
  </Header>
);
