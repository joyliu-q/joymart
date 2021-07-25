import {
  Container,
  Link,
  Center,
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
import {
  RoutineEssentialItem,
  useCart,
  useRoutineEssentals,
} from "../../database";
import Cart from "../../pages/Cart";

export default function ShowCartButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [cart, setCart] = React.useState<Record<string, { count: number }>>({});
  const [routineEssentials, setRoutineEssentials] = React.useState<
    RoutineEssentialItem[]
  >([]);

  const { get: getCart } = useCart();
  const { get: getRoutineEssentals } = useRoutineEssentals();
  // Make cart & routineEssential data up to date
  React.useEffect(() => {
    async function refreshData() {
      const cartData = (await getCart()) ?? {};
      const cartArray: Record<string, { count: number }> = cartData;
      setCart(cartArray);

      const routineData = (await getRoutineEssentals()) ?? {};
      const routineArray: RoutineEssentialItem[] = Object.entries(routineData);
      setRoutineEssentials(routineArray);
    }
    refreshData();
  }, []);

  return (
    <>
      <>
        <Tooltip hasArrow label="Show Cart" aria-label="Show Cart">
          <Image
            boxSize="250px"
            transition={"all 0.5s ease"}
            _hover={{
              transform: "scale(1.15)",
              transition: "all 1.2s ease",
            }}
            src="/graphics/basket-full.svg"
            onClick={onOpen}
            position="fixed"
            bottom={-2}
            right={8}
          />
        </Tooltip>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            minHeight="calc(100vh - 120px)"
            minWidth="calc(100vw - 100px)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
          >
            <ModalCloseButton />
            <ModalBody>
              <Cart
                isModal
                cart={cart}
                routineEssentials={routineEssentials}
                setCart={setCart}
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    </>
  );
}
