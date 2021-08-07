import React from "react";

type Props = {
  symbol: string;
  label: string;
};

export const Emoji: React.FC<Props> = ({ symbol, label }) => (
  <span className="emoji" role="img" aria-label={label} aria-hidden="false">
    {symbol}
  </span>
);
