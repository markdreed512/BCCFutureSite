// This component takes text data with line breaks and reformats it into paragraph

import React from "react";

export default function FormattedDescription({ text, className }) {
  const formattedText = text.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      <span>{line.trim()}</span>
      <br />
    </React.Fragment>
  ));

  return <p className={className}>{formattedText}</p>;
}
