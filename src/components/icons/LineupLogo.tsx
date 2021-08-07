import React from "react";

export const LineupLogo: React.FC<React.SVGAttributes<SVGSVGElement>> = (
  props
) => (
  <svg
    width="132"
    height="132"
    viewBox="0 0 132 132"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <filter
        x="-9.9%"
        y="-1.1%"
        width="131%"
        height="104.4%"
        filterUnits="objectBoundingBox"
        id="a"
      >
        <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation="1"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          in="shadowBlurOuter1"
        />
      </filter>
      <text
        id="b"
        fontFamily="Pacifico-Regular, Pacifico"
        fontSize="104"
        fontStyle="italic"
        fontWeight="normal"
        letterSpacing=".395"
        fill="#FFF"
      >
        <tspan x="25" y="109">
          L
        </tspan>
      </text>
    </defs>
    <g fill="none" fillRule="evenodd">
      <rect fill="#529D52" x="2" y="2" width="128" height="128" rx="16" />
      <g fill="#FFF">
        <use filter="url(#a)" xlinkHref="#b" />
        <use xlinkHref="#b" />
      </g>
    </g>
  </svg>
);
