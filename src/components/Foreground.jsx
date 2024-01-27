import React from "react";
import { useRef } from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import { useState } from "react";

function Foreground() {
  const ref = useRef(null);
  const date = new Date().toLocaleDateString();

  const [cards, setCards] = useState([
    {
      title: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      date: date,
      // close: true,
      tagColor: "red",
      zIndex: 10,
    },
    {
      title: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      date: date,
      // close: true,
      tagColor: "#2563EB",
      zIndex: 10,
    },
    {
      title: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      date: date,
      // close: true,
      tagColor: "#2563EB",
      zIndex: 10,
    },
  ]);

  const updateZIndex = (clickedIndex) => {
    const updatedCards = cards.map((card, index) => ({
      ...card,
      zIndex: index === clickedIndex ? 20 : 10,
    }));
    setCards(updatedCards);
  };

  const addNewCard = (newCard) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  // const removeCard = (index) => {
  //   const updatedCards = [...cards];
  //   updatedCards.splice(index, 1);
  //   setCards(updatedCards);
  // };

  // const removeCard = (id) => {
  //   console.log(id, "delete");
  //   setCards((preValue) => {
  //     return preValue.filter((arrElements, index) => {
  //       console.log(index !== id);
  //       return index !== id;
  //     });
  //   });
  // };
  const removeCard = (index) => {
    const updatedCards = delete cards[index];
    setCards(updatedCards);
  };

  return (
    <>
      <div className="w-full h-full" ref={ref}>
        <div className="w-full h-10 ">
          <Navbar addNewCard={addNewCard} />
        </div>
        <div
          // ref={ref}
          className="fixed z-[3] w-full h-full top-20 left-0 flex gap-5 flex-wrap p-5"
        >
          {/* {data.map((item, index) => (
            <Card data={item} i={index} reference={ref} />
          ))} */}

          {cards.map((item, index) => (
            <Card
              key={index}
              data={item}
              i={index}
              reference={ref}
              updateZIndex={updateZIndex}
              removeCard={() => removeCard(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Foreground;
