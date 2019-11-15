import React from 'react'

// Used a prop to change the hero component of different pages
export default function Hero({children, hero}) {
  return (
    <header className={hero}>{children}</header>
  );
}



// Setting up the default prop 
Hero.defaultProps = {

    hero:"defaultHero"

}