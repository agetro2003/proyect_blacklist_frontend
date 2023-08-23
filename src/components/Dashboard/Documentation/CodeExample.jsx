import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeExample = ({ code, language }) => {
  return (
    <SyntaxHighlighter language={language} style={materialDark}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeExample;
