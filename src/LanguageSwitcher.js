import React from 'react';

const LanguageSwitcher = ({ activeTab }) => {
  const text = activeTab === 'welcome'
    ? 'Linguistics+CS @ UCLA'
    : 'Linguistique+Informatique @ UCLA';

  return <p>{text}</p>;
};

export default LanguageSwitcher;