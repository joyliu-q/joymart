import {
  Container,
  Image,
  Tooltip,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { DataSet, Network } from "vis-network/standalone";

// Store sections available
const NODES = new DataSet([
  {
    id: 0,
    label: "Frozen Foods",
    image: "/layout/2d/frozen.svg",
    shape: "image",
    value: 70,
    title: "Go to Frozen Foods section!",
    href: "/explore/frozen-food",
  },
  {
    id: 1,
    label: "Fruits Section",
    image: "/layout/2d/fruits.svg",
    shape: "image",
    value: 70,
    title: "Go to Fruits section!",
    href: "/explore/fruits",
  },
  {
    id: 2,
    label: "Vegetables Section",
    image: "/layout/2d/vegetables.svg",
    shape: "image",
    value: 70,
    title: "Go to Vegetables section!",
    href: "/explore/vegetables",
  },
  {
    id: 3,
    label: "General Section",
    image: "/layout/2d/general.svg",
    shape: "image",
    value: 100,
    title: "Go to General section!",
    href: "/explore/general",
  },
  {
    id: 4,
    label: "Furniture Section",
    image: "/layout/2d/furniture.svg",
    shape: "image",
    value: 50,
    title: "Go to Furniture section!",
    href: "/explore/furniture",
  },
  {
    id: 5,
    label: "Electronics Section",
    image: "/layout/2d/electronics.svg",
    shape: "image",
    value: 50,
    title: "Go to Electronics section!",
    href: "/explore/electronics",
  },
  {
    id: 6,
    label: "Clothes Section",
    image: "/layout/2d/clothes.svg",
    shape: "image",
    value: 70,
    title: "Go to Clothes section!",
    href: "/explore/clothes",
  },
]);

// Travel paths between different sections
const EDGES = new DataSet([
  { from: 0, to: 1, dashes: true },
  { from: 0, to: 2, dashes: true },
  { from: 0, to: 3, dashes: true },
  { from: 1, to: 2, dashes: true },
  { from: 3, to: 4, dashes: true },
  { from: 3, to: 5, dashes: true },
  { from: 3, to: 6, dashes: true },
]);

// TODO: fix responsiveness, combine modal view & nonmodal view into 1 type of style, & add 3d map
export default function VisMap({ isModal = false }: { isModal?: boolean }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isHover, setIsHover] = React.useState(false);

  React.useEffect(() => {
    // Create a network to use as the map
    const container = document.getElementById("visNetwork");
    const data = {
      nodes: NODES,
      edges: EDGES,
    };
    const options = {
      nodes: {
        shape: "dot",
        scaling: {
          customScalingFunction: function (total: any, value: any) {
            return value / total;
          },
          min: 50,
          max: 110,
        },
      },
      interaction: { hover: true },
      physics: {
        enabled: false,
        solver: "repulsion",
        barnesHut: { springLength: 800, springConstant: 0, avoidOverlap: 0.25 },
        repulsion: {
          nodeDistance: 800,
        },
      },
    };
    if (container !== null) {
      const network = new Network(container, data, options);
      network.stabilize();

      // Upon click, redirect page to different Joymart section (e.g. /electronics)
      network.on("click", function (event) {
        const nodesClicked = event.nodes; // This is an array, we only want the 1st value
        if (nodesClicked.length > 0) {
          const nodeId = nodesClicked[0];
          window.location.replace(`${NODES.get(nodeId).href}`);
        }
      });

      // Hover state -> change mouse cursor
      network.on("hoverNode", function (event) {
        setIsHover(true);
      });
      network.on("blurNode", function (event) {
        setIsHover(false);
      });
    }
  }, []);

  return (
    <>
      {isModal ? (
        <>
          <Tooltip hasArrow label="Open Map" aria-label="Open Map">
            <Box onClick={onOpen}>
              <Image
                className="map"
                boxSize="100px"
                transition={"all 0.5s ease"}
                _hover={{
                  transform: "scale(1.15)",
                  transition: "all 1.2s ease",
                }}
                src="/graphics/map.svg"
              />
            </Box>
          </Tooltip>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
              bgImage="url('/mapLayout.svg')"
              backgroundRepeat="no-repeat"
              bgSize="90%"
              bgPos="center"
              minHeight="calc(100vh - 160px)"
              minWidth="calc(100vw - 100px)"
              display="flex"
              alignItems="center"
              justifyContent="center"
              position="relative"
            >
              <Flex
                minHeight="50px"
                bgColor="pink.400"
                alignItems="center"
                p={4}
                minWidth="250px"
                justifyContent="center"
                color="white"
                position="absolute"
                top="-25px"
                borderRadius="20px"
              >
                <Heading>Map Layout</Heading>
              </Flex>
              <ModalCloseButton />
              <ModalBody>
                <Flex
                  id="visNetwork"
                  p={0} // padding added to override vis.js config
                />
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      ) : (
        <Container
          maxW={"8xl"}
          height="calc(100vh - 60px)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          id="visNetwork"
          cursor={isHover ? "pointer" : "inherit"}
          p={0} // padding added to override vis.js config
        />
      )}
    </>
  );
}
