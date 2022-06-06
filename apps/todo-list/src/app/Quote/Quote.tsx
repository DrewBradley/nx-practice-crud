import React, { useState } from 'react'

interface Props {
    quote: Quote;
  }
  
  export const Quote: React.FC<Props> = ({ quote }) => {
    const {text, author} = quote;
    
    return (
      <>
        <p>"{text}"</p>
        <p>-{author}</p>
      </>
    );
  };