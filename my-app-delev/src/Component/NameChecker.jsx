import React from 'react';

const NameChecker = ({firstName, lastName}) => {
  const isValidName = (name) => {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(name);
  }

  const isNameValid = isValidName(firstName);
  const isLastNameValid = isValidName(lastName);

  return (
    <div>
      {isNameValid && isLastNameValid ? (
        <button>ODKHEL</button>
      ) : (
        <button>3AWED YA GHCHIW</button>
      )}
    </div>
  );
};

export default NameChecker;