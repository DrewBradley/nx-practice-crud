import React, { useState } from 'react'

interface Props {
    quote: Quote;
  }
  
  export const Quote: React.FC<Props> = ({ quote }) => {
    const {text, author} = quote;
    
    return (
      <>
        <h2>{text}</h2>
        <h4>-{author}</h4>
      </>
    );
  };