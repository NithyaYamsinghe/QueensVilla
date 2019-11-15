import React from 'react';

// Implementing the banner
// Children means other things inside the banner component 

export default function Banner({children, title, subtitle}) {
  return (
    <div className="banner">
        <h1>{title}</h1>
        <div></div>
        <p>{subtitle}</p>
        {children}
        
      
    </div>
  )
}
