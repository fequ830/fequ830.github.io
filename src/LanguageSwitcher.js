import React from 'react';

const LanguageSwitcher = ({ activeTab }) => {
  // Define the text and elements based on the activeTab
  const content = activeTab === 'welcome' ? (
    <>
      <p>Linguistics+CS @ UCLA</p>
      <p>The design of this site is an ode to my all-time favorite mystery game: Return of the Obra Dinn. I also wanted to have the website in two languages, which you can toggle by clicking Welcome or Bienvenue.</p>
    </>
  ) : (
    <>
      <p>Linguistique+Informatique @ UCLA</p>
      <p>La conception de cet site web est inspirée par mon jeu vidéo mystère préféré : Return of the Obra Dinn. J'ai voulu aussi d'avoir l'option pour mettre le site web en deux langues; vous pouvez l'ajuster en cliquant sur Welcome ou Bienvenue.</p>
    </>
  );

  return <div>{content}</div>;
};

export default LanguageSwitcher;
