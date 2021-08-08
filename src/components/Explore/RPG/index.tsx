import { Box, Flex, Icon, IconButton, Tooltip } from "@chakra-ui/react";
import React from "react";
import Particles from "react-particles-js";
import Character from "./Character";
import { PEOPLE } from "./helpers";
import { GrFormViewHide } from "react-icons/gr";
import { BiShowAlt } from "react-icons/bi";

export default function RPG({ isModal = false }: { isModal?: boolean }) {
  const [showRpg, setShowRpg] = React.useState(false);
  return (
    <Box>
      {showRpg ? (
        <Box position="relative">
          {PEOPLE.map((name) => (
            <Character name={name} />
          ))}
        </Box>
      ) : null}
      <Flex position="absolute" bottom="20px" right="30px">
        <Tooltip label={showRpg ? "Hide characters" : "Show characters"}>
          <IconButton
            className="help-button"
            aria-label="question-icon"
            icon={<Icon as={showRpg ? BiShowAlt : GrFormViewHide} />}
            rounded={"full"}
            px={6}
            size="lg"
            zIndex={6}
            onClick={() => setShowRpg(!showRpg)}
          />
        </Tooltip>
      </Flex>
      {/* Particle Backdrop */}
      <Particles
        width="100vw"
        height="calc(100vh - 60px)"
        params={{
          particles: {
            number: {
              value: 20,
              density: {
                enable: true,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 1,
              out_mode: "out",
            },
            shape: {
              type: ["image", "circle"],
              image: PEOPLE.map((name) => {
                return {
                  src: `/graphics/people/${name}.svg`,
                  height: 20,
                  width: 23,
                };
              }),
            },
            color: {
              value: ["#EF8BBD", "#FEF2A8", "#78EAC4", "#B2E7F1"],
            },
            opacity: {
              value: 0.5,
              anim: {
                enable: true,
              },
            },
            size: {
              value: 30,
              random: false,
              anim: {
                enable: true,
                speed: 4,
                size_min: 10,
                sync: false,
              },
            },
          },
          retina_detect: false,
        }}
      />
    </Box>
  );
}
