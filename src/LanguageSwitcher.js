import React from 'react';

const LanguageSwitcher = ({ activeTab }) => {
  // Define the text and elements based on the activeTab
  const content = activeTab === 'welcome' ? (
    <>
      <p>Linguistics+CS @ UCLA</p>
      <p>The design of this site is an ode to my all-time favorite mystery game: <a href="https://store.steampowered.com/app/653530/Return_of_the_Obra_Dinn/" target="_blank" rel="noopener noreferrer" className="underline-on-hover">Return of the Obra Dinn</a>. I also wanted to have the main page in two languages, which you can toggle by clicking "Welcome" or "Bienvenue".</p>
    </>
  ) : (
    <>
      <p>Linguistique+Informatique @ UCLA</p>
      <p>La conception de cet site web est inspirée par mon jeu vidéo mystère préféré : <a href="https://store.steampowered.com/app/653530/Return_of_the_Obra_Dinn/" target="_blank" rel="noopener noreferrer" className="underline-on-hover">Return of the Obra Dinn</a>. J'ai voulu aussi d'avoir l'option pour mettre le page principal en deux langues; vous pouvez l'ajuster en cliquant sur « Welcome » ou « Bienvenue » au-dessus.</p>
    </>
  );

  return <div>{content}</div>;
};

export default LanguageSwitcher;
