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
  useMediaQuery,
} from "@chakra-ui/react";

import NormMap from "./NormMap";
import VisMap from "./VisMap";

// Map wrapper (content varies depending on screen size)
export default function Map({ isModal = false }: { isModal?: boolean }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThanLg] = useMediaQuery("(min-width: 64em)");

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
              bgImage={isLargerThanLg ? "url('/mapLayout.svg')" : ""}
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
              <ModalBody
                p={0} // padding added to override vis.js config
              >
                {isLargerThanLg ? <NormMap isModal /> : <VisMap />}
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      ) : (
        <Container
          maxW={"8xl"}
          bgImage={isLargerThanLg ? "url('/mapLayout.svg')" : ""}
          backgroundRepeat="no-repeat"
          bgSize="100%"
          bgPos="center"
          minHeight="calc(100vh - 60px)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          p={0} // padding added to override vis.js config
        >
          {isLargerThanLg ? <NormMap /> : <VisMap />}
        </Container>
      )}
    </>
  );
}
