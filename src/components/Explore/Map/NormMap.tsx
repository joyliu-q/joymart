import { Link, Center, Image, Tooltip } from "@chakra-ui/react";
import Particles from "react-particles-js";

const PEOPLE = [
  "alice",
  "carl",
  "jae",
  "ling",
  "megan",
  "nino",
  "reese",
  "tiana",
];

export default function NormMap({ isModal = false }: { isModal?: boolean }) {
  return (
    <>
      {isModal ? MapItemsModal : MapItems}
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
              image: PEOPLE.map((person) => {
                return {
                  src: `/graphics/people/${person}.svg`,
                  height: 20,
                  width: 23,
                };
              }),
            },
            color: {
              value: ["#EF8BBD", "#FEF2A8", "#78EAC4", "#B2E7F1"],
            },
            opacity: {
              value: 0.9,
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
    </>
  );
}

const MapItems = (
  <>
    <Center //Frozen Food
      minHeight="150px"
      position="absolute"
      top="calc(50% - 275px)"
      left="50px"
      className="frozen-food"
    >
      <Link href="/explore/frozen-food">
        <Image
          transition={"all 0.8s ease"}
          _hover={{
            transform: "scale(1.5)",
            transition: "all 1.2s ease",
          }}
          src="/layout/milk.svg"
        />
      </Link>
    </Center>

    <Center //Fruits
      minHeight="150px"
      position="absolute"
      bottom="calc(50% - 225px)"
      left="25px"
      className="fruits-and-veggies"
    >
      <Link href="/explore/fruits">
        <Image
          transition={"all 0.8s ease"}
          _hover={{
            transform: "scale(1.5)",
            transition: "all 1.2s ease",
          }}
          src="/layout/fruits.svg"
        />
      </Link>
    </Center>

    <Center //Veggies
      minHeight="150px"
      position="absolute"
      bottom="calc(50% - 225px)"
      left="250px"
      className="fruits-and-veggies"
    >
      <Link href="/explore/vegetables">
        <Image
          transition={"all 0.8s ease"}
          _hover={{
            transform: "scale(1.5)",
            transition: "all 1.2s ease",
          }}
          src="/layout/veggies.svg"
        />
      </Link>
    </Center>

    <Center //Middle Aisles
      minHeight="150px"
      position="absolute"
      bottom="calc(50% - 30px)"
      className="middle-aisles"
    >
      <Link href="/explore/general">
        <Image
          transition={"all 0.8s ease"}
          _hover={{
            transform: "scale(1.5)",
            transition: "all 1.2s ease",
          }}
          src="/layout/processed.svg"
        />
      </Link>
    </Center>

    <Center //Furniture
      minHeight="150px"
      position="absolute"
      bottom="calc(50% + 200px)"
      right="50px"
      className="furniture"
    >
      <Link href="/explore/furniture">
        <Image
          transition={"all 0.8s ease"}
          _hover={{
            transform: "scale(1.5)",
            transition: "all 1.2s ease",
          }}
          src="/layout/furniture.svg"
        />
      </Link>
    </Center>

    <Center //Electronics
      minHeight="150px"
      position="absolute"
      bottom="calc(50%)"
      right="250px"
      className="electronics"
    >
      <Link href="/explore/electronics">
        <Image
          transition={"all 0.8s ease"}
          _hover={{
            transform: "scale(1.5)",
            transition: "all 1.2s ease",
          }}
          src="/layout/electronics.svg"
        />
      </Link>
    </Center>

    <Center //Clothes
      minHeight="150px"
      position="absolute"
      bottom="calc(50% - 300px)"
      right="125px"
      className="clothes"
    >
      <Link href="/explore/clothes">
        <Image
          transition={"all 0.8s ease"}
          _hover={{
            transform: "scale(1.5)",
            transition: "all 1.2s ease",
          }}
          src="/layout/clothes.svg"
        />
      </Link>
    </Center>

    <Center //Cash Regs
      minHeight="150px"
      position="absolute"
      bottom="calc(50% - 325px)"
      className="registers"
    >
      <Link href="/cart">
        <Tooltip
          hasArrow
          label="Ready to check out?"
          aria-label="Ready to check out?"
        >
          <Image
            transition={"all 0.8s ease"}
            _hover={{
              transform: "scale(1.25)",
              transition: "all 0.8s ease",
            }}
            src="/layout/cashreg.svg"
          />
        </Tooltip>
      </Link>
    </Center>
  </>
);

const MapItemsModal = (
  <>
    <Center //Frozen Food
      minHeight="150px"
      position="fixed"
      top={{ base: "30%", lg: "calc(50% - 275px)" }}
      left="15%"
      className="frozen-food"
    >
      <Link href="/explore/frozen-food">
        <Image
          boxSize={{ base: "10vw", lg: "150px" }}
          transition={"all 0.8s ease"}
          _hover={{
            transform: "scale(1.5)",
            transition: "all 1.2s ease",
          }}
          src="/layout/milk.svg"
        />
      </Link>
    </Center>

    <Center //Fruits
      minHeight="150px"
      position="absolute"
      bottom="calc(50% - 225px)"
      left="100px"
      className="fruits-and-veggies"
    >
      <Link href="/explore/fruits">
        <Image
          boxSize={{ base: "10vw", lg: "150px" }}
          transition={"all 0.8s ease"}
          _hover={{
            transform: "scale(1.5)",
            transition: "all 1.2s ease",
          }}
          src="/layout/fruits.svg"
        />
      </Link>
    </Center>

    <Center //Veggies
      minHeight="150px"
      position="absolute"
      bottom="calc(50% - 225px)"
      left="300px"
      className="fruits-and-veggies"
    >
      <Link href="/explore/vegetables">
        <Image
          boxSize={{ base: "10vw", lg: "150px" }}
          transition={"all 0.8s ease"}
          _hover={{
            transform: "scale(1.5)",
            transition: "all 1.2s ease",
          }}
          src="/layout/veggies.svg"
        />
      </Link>
    </Center>

    <Center //Middle Aisles
      minHeight="150px"
      position="absolute"
      left="calc(50% - 120px)"
      bottom="calc(50% - 30px)"
      className="middle-aisles"
    >
      <Link href="/explore/general">
        <Image
          boxSize={{ base: "15vw", lg: "200px" }}
          transition={"all 0.8s ease"}
          _hover={{
            transform: "scale(1.5)",
            transition: "all 1.2s ease",
          }}
          src="/layout/processed.svg"
        />
      </Link>
    </Center>

    <Center //Furniture
      minHeight="150px"
      position="absolute"
      bottom={{ base: "calc(50% + 10%)", lg: "calc(50% + 200px)" }}
      right="75px"
      className="furniture"
    >
      <Link href="/explore/furniture">
        <Image
          boxSize={{ base: "15vw", lg: "150px" }}
          transition={"all 0.8s ease"}
          _hover={{
            transform: "scale(1.5)",
            transition: "all 1.2s ease",
          }}
          src="/layout/furniture.svg"
        />
      </Link>
    </Center>

    <Center //Electronics
      minHeight="150px"
      position="absolute"
      bottom="calc(50%)"
      right="250px"
      className="electronics"
    >
      <Link href="/explore/electronics">
        <Image
          boxSize={{ base: "15vw", lg: "200px" }}
          transition={"all 0.8s ease"}
          _hover={{
            transform: "scale(1.5)",
            transition: "all 1.2s ease",
          }}
          src="/layout/electronics.svg"
        />
      </Link>
    </Center>

    <Center //Clothes
      minHeight="150px"
      position="absolute"
      bottom="calc(50% - 300px)"
      right="175px"
      className="clothes"
    >
      <Link href="/explore/clothes">
        <Image
          boxSize={{ base: "15vw", lg: "200px" }}
          transition={"all 0.8s ease"}
          _hover={{
            transform: "scale(1.5)",
            transition: "all 1.2s ease",
          }}
          src="/layout/clothes.svg"
        />
      </Link>
    </Center>

    <Center //Cash Regs
      minHeight="150px"
      position="absolute"
      left="calc(50% - 170px)"
      bottom="calc(50% - 325px)"
      className="registers"
    >
      <Link href="/cart">
        <Tooltip
          hasArrow
          label="Ready to check out?"
          aria-label="Ready to check out?"
        >
          <Image
            transition={"all 0.8s ease"}
            _hover={{
              transform: "scale(1.25)",
              transition: "all 0.8s ease",
            }}
            src="/layout/cashreg.svg"
          />
        </Tooltip>
      </Link>
    </Center>
  </>
);
