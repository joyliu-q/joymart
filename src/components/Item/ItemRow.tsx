import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  Input,
  Button,
} from "@chakra-ui/react";
import { ItemDetails } from "../../constants/item";
import Rating from "react-rating";
import React from "react";
import {
  CartItems,
  RoutineEssentialItems,
  useCart,
  useRoutineEssentals,
} from "../../database/";
import { PlusSquareIcon, SmallCloseIcon } from "@chakra-ui/icons";
import ConfirmDeletePopover from "./ConfirmDeletePopover";

export default function ItemRow({
  item,
  count,
  onClick,
  cart,
  routineEssentials,
  hideOnDelete = false,
}: {
  item: ItemDetails;
  count?: number;
  onClick?: () => void;
  cart: CartItems;
  routineEssentials: RoutineEssentialItems;
  hideOnDelete?: boolean;
}) {
  // Helper functions manipulating local database
  const { get: getCart, add: addToCart, remove: removeFromCart } = useCart();
  const { add: addToRoutineEssentals, remove: removeFromRoutineEssentals } =
    useRoutineEssentals();
  const isCartPage: boolean = count !== null && count !== undefined;

  // Banners for adding & removing item
  const [showAddedBanner, setShowAddedBanner] = React.useState(false);
  const [showDeletedBanner, setShowDeletedBanner] = React.useState(false);

  // # of items purchasing
  const [itemCount, setItemCount] = React.useState(1);

  // Checks whether item is inCart & inRoutineEssentials, used for button toggles
  const [inCart, setInCart] = React.useState(
    cart[`${item.id}`] !== null && cart[`${item.id}`] !== undefined
  );
  const [inRoutineEssentials, setInRoutineEssentials] = React.useState(
    routineEssentials[`${item.id}`] !== null &&
      routineEssentials[`${item.id}`] !== undefined
  );

  // Add/remove item
  const toggleItemInCart = () => {
    if (inCart) {
      removeFromCart({ itemId: item.id });
      setShowDeletedBanner(true);

      let newCart = cart;
      delete newCart[`${item.id}`];

      setShowAddedBanner(false);
    } else {
      addToCart({ itemId: item.id, count: itemCount });
      setShowDeletedBanner(false);
      setShowAddedBanner(true);

      let newCart = cart;
      newCart[`${item.id}`] = { count: 1 };
    }
    setInCart(!inCart);
  };
  const toggleItemInRoutineEssentials = () => {
    if (inRoutineEssentials) {
      removeFromRoutineEssentals({ itemId: item.id });
    } else {
      addToRoutineEssentals({ itemId: item.id });
    }
    setInRoutineEssentials(!inRoutineEssentials);
    if (isCartPage) {
      window.location.reload();
    }
  };

  // Modify # of items purchased
  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemCount(parseInt(e.target.value) ?? 1);
    if (isCartPage) {
      addToCart({ itemId: item.id, count: parseInt(e.target.value) ?? 1 });
    }
  };
  // Make cart & routineEssential data up to date
  React.useEffect(() => {
    setInCart(cart[`${item.id}`] !== null && cart[`${item.id}`] !== undefined);
    setInRoutineEssentials(
      routineEssentials[`${item.id}`] !== null &&
        routineEssentials[`${item.id}`] !== undefined
    );

    if (inCart) {
      const { count } = cart[`${item.id}`];
      setItemCount(count);
    }
  }, [cart, routineEssentials]);

  // Make cart data up to date (TODO: routine essential support consistency?)
  React.useEffect(() => {
    async function refreshData() {
      const cartData = (await getCart()) ?? {};
      const itemIsInCart =
        cartData[item.id] !== null && cartData[item.id] !== undefined;
      setInCart(itemIsInCart);
    }
    refreshData();
  }, []);

  return (
    <>
      {showAddedBanner ? (
        <Center
          minWidth="100%"
          bgColor="green.200"
          display="flex"
          transition="opacity 500ms"
          transitionDelay="3s"
          className="makeFadeOut"
        >
          <PlusSquareIcon mr={4} />
          Item is added
        </Center>
      ) : null}
      {showDeletedBanner ? (
        <Center minWidth="100%" bgColor="pink.200" className="makeFadeOut">
          <SmallCloseIcon mr={4} />
          Item is deleted
        </Center>
      ) : null}
      {hideOnDelete && showDeletedBanner ? null : (
        <Center py={12} className="itemRow">
          <Stack
            direction="row"
            spacing={12}
            role={"group"}
            p={6}
            width={"100%"}
            w={"full"}
            bg={"white"}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
            _hover={{
              cursor: onClick == null ? "default" : "pointer",
            }}
            onClick={onClick}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage: `url(${item.image})`,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={item.image}
                fallbackSrc={"https://via.placeholder.com/250"}
              />
            </Box>
            <Stack textAlign="left" width="100%">
              <Flex flexDirection="row-reverse">
                {isCartPage ? (
                  <ConfirmDeletePopover
                    removeFrom="cart"
                    onConfirm={toggleItemInCart}
                  />
                ) : null}
                <Input
                  defaultValue={count}
                  value={itemCount}
                  maxWidth="50px"
                  type="number"
                  min="1"
                  max="100"
                  mr={1}
                  onChange={handleCountChange}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      window.location.reload();
                    }
                  }}
                />
              </Flex>
              <Text
                color={"gray.500"}
                fontSize={"sm"}
                textTransform={"uppercase"}
              >
                {item.category}
              </Text>
              <Heading fontSize={"2xl"} fontWeight={500}>
                {item.name}
              </Heading>
              <Box>
                <Rating
                  readonly
                  initialRating={item.rating}
                  emptySymbol={
                    <img
                      src="/empty-star.svg"
                      className="icon"
                      width={24}
                      height={24}
                      alt="O"
                    />
                  }
                  fullSymbol={
                    <img
                      src="/solid-star.svg"
                      className="icon"
                      width={24}
                      height={24}
                      alt="X"
                    />
                  }
                />
              </Box>
              <Flex justifyContent="space-between">
                <Stack direction={"row"} align={"center"}>
                  <Text fontWeight={800} fontSize={"xl"}>
                    ${item.price.default}
                  </Text>
                  <Text color={"gray.600"}>{item.price.unit}</Text>
                </Stack>
                <Flex>
                  <Button
                    className="routineEssentials"
                    mr={1}
                    onClick={toggleItemInRoutineEssentials}
                    variant={inRoutineEssentials ? "ghost" : "solid"}
                    bgColor={"grey.100"}
                    color={"gray.400"}
                    _hover={{
                      bgColor: "grey.100",
                      color: inRoutineEssentials ? "red" : "green",
                    }}
                    _active={{
                      bgColor: "none",
                    }}
                    _focus={{ border: "none" }}
                  >
                    {inRoutineEssentials
                      ? "Remove from Routine Essentials"
                      : "Add to Routine Essentials"}
                  </Button>
                  {isCartPage ? null : inCart ? (
                    <ConfirmDeletePopover
                      removeFrom="cart"
                      onConfirm={toggleItemInCart}
                    />
                  ) : (
                    <Button
                      onClick={toggleItemInCart}
                      variant={"solid"}
                      bgColor={"green.100"}
                      color={"green.500"}
                      _hover={{
                        bgColor: "green.200",
                        color: "green.600",
                      }}
                      _active={{
                        bgColor: "green.300",
                      }}
                      _focus={{ border: "none" }}
                    >
                      Add to Cart
                    </Button>
                  )}
                </Flex>
              </Flex>
            </Stack>
          </Stack>
        </Center>
      )}
    </>
  );
}
