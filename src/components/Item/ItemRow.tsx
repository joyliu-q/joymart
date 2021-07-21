import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  Input,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { ItemDetails } from "../../constants/item";
import Rating from "react-rating";
import { RiDeleteBin5Fill } from "react-icons/ri";
import React from "react";
import { useCart, useRoutineEssentals } from "../../database/";
import { PlusSquareIcon, SmallCloseIcon } from "@chakra-ui/icons";

export default function ItemRow({
  item,
  count,
  onClick,
}: {
  item: ItemDetails;
  count?: number;
  onClick?: () => void;
}) {
  const { get: getCart, add: addToCart, remove: removeFromCart } = useCart();
  const { add: addToRoutineEssentals } = useRoutineEssentals();

  const inCart: boolean = count !== null && count !== undefined;
  const [confirmDeleteOpen, setConfirmDeleteOpen] = React.useState(false);
  const [isDeleted, setIsDeleted] = React.useState(false);
  const [isAdded, setIsAdded] = React.useState(false);

  // Make cart & routineEssential data up to date
  React.useEffect(() => {
    async function refreshData() {
      const cartData = (await getCart()) ?? {};
      const itemIsInCart =
        cartData[item.id] !== null && cartData[item.id] !== undefined;
      setIsAdded(itemIsInCart);
    }
    refreshData();
  }, []);

  const deleteItemFromCart = () => {
    removeFromCart({ itemId: item.id });
    setConfirmDeleteOpen(!confirmDeleteOpen);
    setIsDeleted(true);
  };

  const addItemToCart = () => {
    addToCart({ itemId: item.id, count: 0 });
    setIsAdded(true);
  };

  const addItemToRoutineEssentials = () => {
    addToRoutineEssentals({ itemId: item.id });
  };

  const bgColor = useColorModeValue("white", "gray.800");

  if (isDeleted) {
    return (
      <Center minHeight={12} minWidth="100%" bgColor="pink.200" my={2}>
        <SmallCloseIcon mr={4} />
        Item is deleted
      </Center>
    );
  }

  return (
    <>
      {isAdded ? (
        <Center
          minHeight={12}
          minWidth="100%"
          bgColor="green.200"
          display="flex"
          transition="opacity 500ms"
          transitionDelay="3s"
          my={2}
        >
          <PlusSquareIcon mr={4} />
          Item is added
        </Center>
      ) : null}
      <Center py={12}>
        <Stack
          direction="row"
          spacing={12}
          role={"group"}
          p={6}
          width={"100%"}
          w={"full"}
          bg={bgColor}
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
            />
          </Box>
          <Stack textAlign="left" width="100%">
            {inCart ? (
              <Flex flexDirection="row-reverse">
                <Popover
                  returnFocusOnClose={false}
                  autoFocus={false}
                  isOpen={confirmDeleteOpen}
                  onClose={() => setConfirmDeleteOpen(confirmDeleteOpen)}
                  placement="right"
                  closeOnBlur={false}
                >
                  <PopoverTrigger>
                    <IconButton
                      variant="ghost"
                      aria-label="Call Sage"
                      fontSize="32px"
                      icon={<RiDeleteBin5Fill />}
                      onClick={() => setConfirmDeleteOpen(!confirmDeleteOpen)}
                    />
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverHeader fontWeight="semibold">
                      Confirmation
                    </PopoverHeader>
                    <PopoverArrow />
                    <PopoverBody>
                      Are you sure you want to remove this item from cart?
                    </PopoverBody>
                    <PopoverFooter d="flex" justifyContent="flex-end">
                      <ButtonGroup size="sm">
                        <Button
                          variant="outline"
                          onClick={() =>
                            setConfirmDeleteOpen(!confirmDeleteOpen)
                          }
                        >
                          Cancel
                        </Button>
                        <Button colorScheme="red" onClick={deleteItemFromCart}>
                          Remove
                        </Button>
                      </ButtonGroup>
                    </PopoverFooter>
                  </PopoverContent>
                </Popover>
                <Input
                  defaultValue={count}
                  maxWidth="50px"
                  type="number"
                  min="1"
                  max="100"
                  mr={1}
                />
              </Flex>
            ) : null}
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"uppercase"}
            >
              Brand
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
              {inCart ? (
                <Button onClick={addItemToRoutineEssentials}>
                  Add to Routine Essential
                </Button>
              ) : (
                <Button
                  onClick={addItemToCart}
                  variant={isAdded ? "ghost" : "solid"}
                  bgColor={isAdded ? "grey.100" : "green.100"}
                  color={isAdded ? "gray.400" : "green.500"}
                  _hover={{
                    cursor: isAdded ? "default" : "pointer",
                    bgColor: isAdded ? "grey.100" : "green.200",
                    color: isAdded ? "grey.400" : "green.600",
                  }}
                  _active={{
                    bgColor: isAdded ? "none" : "green.300",
                  }}
                  _focus={{ border: "none" }}
                >
                  {isAdded ? "Added to Cart" : "Add to Cart"}
                </Button>
              )}
            </Flex>
          </Stack>
        </Stack>
      </Center>
    </>
  );
}
