import React from 'react';
// import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Aeg from '../../assets/images/smorrebrod/Aeg/Aeg.png';

export default function Game(level) {
  //   const animals = ['Dog', 'Bird', 'Cat', 'Mouse', 'Horse'];

  const elementsEasy = [
    { id: 1, image: { Aeg } },
    { id: 2, image: { Aeg } },
  ];

  const elementsHard = [
    { id: 1, image: { Aeg } },
    { id: 2, image: { Aeg } },
    { id: 3, image: { Aeg } },
    { id: 4, image: { Aeg } },
  ];

  //   const elementsEasy = [{ Aeg }, { Aeg }];
  //   const elementsHard = [{ Aeg }, { Aeg }, { Aeg }, { Aeg }];
  let elements = [];

  if (level === 'easy') {
    elements = elementsEasy;
  } else if (level === 'hard') {
    elements = elementsHard;
  } else {
    return elements;
  }

  return (
    <div>
      console.log(level); console.log(elements);
      <ul>
        {elements.map((element) => (
          <ui>
            console.log(level);
            <li key={element.id}>
              <Card image={element.image} />
            </li>
          </ui>
        ))}
      </ul>
    </div>
  );
}

// export default function Game({ level }) {

//     let elementsEasy = [Aeg, Aeg];
//     let elementsHard = [Aeg, Aeg, Aeg, Aeg];

// if (level === 'easy') return
// (elementsEasy.map((value, index) => {
//      <Card image={value}/>;
//   }
//   return

//   if (level === 'hard') return
//   {elementsHard.map((value, index) => {
//     return <Card image={value}/>;
//   })}

// Game.propTypes = {
//   level: PropTypes.string.isRequired,
// };
