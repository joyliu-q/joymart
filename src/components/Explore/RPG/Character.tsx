import { Image } from "@chakra-ui/image";
import { Tooltip } from "@chakra-ui/tooltip";
import React from "react";
import Tour from "reactour";
import { CONFETTI_COLORS } from "../../Cart/CartSidebar";
import { getCharacterDetails } from "./helpers";

// Clickable character that animates back and forth the screen
export default function Character({ name }: { name: string }) {
  const [isTourOpen, setIsTourOpen] = React.useState(false);

  // x: random number in [0, 100], with 0 denoting 0vw and 100 denoting 100vw
  // y: random number in [0, 100], with 0 denoting 0vh and 100 denoting 100vh
  const x = Math.floor(Math.random() * 100);
  const y = Math.floor(Math.random() * 100);

  React.useEffect(() => {
    //TODO: character animation (move back & forth viewPort)
    const move = () => {
      // Check if x is near borders (0 or 100)
      // If it is near borders, change moving direction
      // Every 500ms, move x by 1vw using setInterval
      // Repeat for y
    };
    move();

    // Bounce character when hovered
    const character = document.getElementById(name);
    if (character !== null) {
      character.addEventListener("mouseover", () => {
        character.classList.add("bounce");
      });
      character.addEventListener("mouseleave", () => {
        character.classList.remove("bounce");
      });
    }
  });

  const handleAcceptQuest = () => {
    setIsTourOpen(false);
    // TODO:
    // 1. If user is not logged in, prompt user log-in.
    // 2. If user is logged in, make relevant db changes to "quests" table
    // 3. Initialize quest progress (0) based on quest db data
  };
  const handleDeclineQuest = () => {
    setIsTourOpen(false);

    // TODO:
    // 1. Reset the steps back to 1
    // 2. Close tour
  };

  return (
    <>
      <Tour
        steps={getCharacterDetails[name].quest({
          acceptQuest: handleAcceptQuest,
          declineQuest: handleDeclineQuest,
        })}
        isOpen={isTourOpen}
        onRequestClose={() => setIsTourOpen(false)}
      />
      <Tooltip
        hasArrow
        label={getCharacterDetails[name].tooltip}
        bg={CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)]}
        fontFamily="'Quicksand', sans-serif"
        color="gray.700"
        placement="auto-start"
      >
        <Image
          zIndex={1}
          id={name}
          position="absolute"
          left={`${x}vw`}
          top={`min(${y}vh, calc(100vh - 260px))`}
          boxSize="80px"
          src={`/graphics/people/${name}.svg`}
          onClick={() => setIsTourOpen(true)}
        />
      </Tooltip>
    </>
  );
}
