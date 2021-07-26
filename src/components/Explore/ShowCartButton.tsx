import {
  Image,
  Tooltip,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import React from "react";
import {
  CartItems,
  RoutineEssentialItems,
  useCart,
  useRoutineEssentals,
} from "../../database";
import Cart from "../../pages/Cart";

// This button is a clickable Cart icon that opens up the Cart page as a modal for convenience
export default function ShowCartButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [cart, setCart] = React.useState<CartItems>({});
  const [routineEssentials, setRoutineEssentials] =
    React.useState<RoutineEssentialItems>({});

  const { get: getCart } = useCart();
  const { get: getRoutineEssentals } = useRoutineEssentals();
  // Make cart & routineEssential data up to date
  React.useEffect(() => {
    async function refreshData() {
      const cartData = (await getCart()) ?? {};
      const cartArray: CartItems = cartData;
      setCart(cartArray);

      const routineData = (await getRoutineEssentals()) ?? {};
      const routineArray: RoutineEssentialItems = routineData;
      setRoutineEssentials(routineArray);
    }
    refreshData();
  }, []);

  return (
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
  );
}
