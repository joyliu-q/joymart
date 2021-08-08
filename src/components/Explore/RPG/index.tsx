import { Box } from "@chakra-ui/layout";
import Particles from "react-particles-js";
import Character from "./Character";
import { PEOPLE } from "./helpers";

export default function RPG({ isModal = false }: { isModal?: boolean }) {
  return (
    <Box>
      <Box position="relative">
        {PEOPLE.map((name) => (
          <Character name={name} />
        ))}
      </Box>

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
