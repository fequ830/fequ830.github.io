import React from 'react';

const LanguageSwitcher = ({ activeTab }) => {
  // Define the text and elements based on the activeTab
  const content = activeTab === 'welcome' ? (
    <div class="textfield">
      <p>The design of this site is an ode to the analog style of my all-time favorite mystery game: <a href="https://store.steampowered.com/app/653530/Return_of_the_Obra_Dinn/" target="_blank" rel="noopener noreferrer" className="underline-on-hover">Return of the Obra Dinn</a>.</p>
    </div>
  ) : (
    <div class="textfield">
      <p>Le design de ce site est inspiré par mon jeu vidéo mystère préféré : <a href="https://store.steampowered.com/app/653530/Return_of_the_Obra_Dinn/" target="_blank" rel="noopener noreferrer" className="underline-on-hover">Return of the Obra Dinn</a>.</p>
    </div>
  );

  return <div>{content}</div>;
};

export default LanguageSwitcher;
