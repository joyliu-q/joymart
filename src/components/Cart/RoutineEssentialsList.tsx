import { Text, Heading, Button, Box, Flex } from "@chakra-ui/react";
import {
  CartItem,
  ITEMS_MAP,
  RoutineEssentialItem,
  useCart,
} from "../../database/index";
import React from "react";
import {
  AddIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  QuestionIcon,
} from "@chakra-ui/icons";

export default function RoutineEssentialsList({
  routineEssentials,
  cart,
}: {
  routineEssentials: RoutineEssentialItem[];
  cart: Record<string, number>;
}): React.ReactElement {
  const [routineIsCollapsed, setRoutineIsCollapsed] = React.useState(true);

  const { add: addToCart } = useCart();

  const addItemToCart = (id: string) => {
    addToCart({ itemId: parseInt(id) ?? 0, count: 0 });
  };

  const handleAddAllToCart = () => {
    routineEssentials.forEach((entry) => {
      const [id] = entry;
      addItemToCart(id);
    });
  };
  return (
    <>
      <Flex
        flexDir="column"
        alignItems="flex-start"
        bgColor="orange.100"
        minHeight={routineIsCollapsed ? 24 : "calc(100% - 75px)"}
        maxHeight="100%"
        width="100%"
        position="absolute"
        pt={8}
        pb={20}
        bottom={0}
        transition="all .3s ease"
        _hover={{
          cursor: "pointer",
          pb: routineIsCollapsed ? 24 : 20,
        }}
        onClick={() => setRoutineIsCollapsed(!routineIsCollapsed)}
      >
        <Flex
          flexDir="column"
          bgColor="white"
          position="relative"
          top="-115px"
          width="100%"
        >
          <Heading as="h3" textAlign="center">
            Routine Essentials
          </Heading>
          <Flex flexDir="row" justifyContent="space-between">
            <Button
              variant="ghost"
              _hover={{ bgColor: "none", color: "blue.500" }}
              leftIcon={<AddIcon />}
              onClick={(e) => {
                e.stopPropagation();
                handleAddAllToCart();
              }}
            >
              <b>Add All to Cart</b>
            </Button>
            {routineIsCollapsed ? (
              <ChevronDownIcon w={10} h={10} />
            ) : (
              <ChevronUpIcon w={10} h={10} />
            )}
          </Flex>
        </Flex>

        <Box
          width={0}
          height={0}
          borderBottom="50px solid #FEB2B2"
          borderRight="50px solid transparent"
          position="absolute"
          top={0}
          right={0}
        />
        <Box
          width={0}
          height={0}
          borderTop="50px solid white"
          borderLeft="50px solid transparent"
          position="absolute"
          top={0}
          right={0}
        />

        {routineEssentials.length < 1 ? (
          <>
            <Text mb={4}>Got items? Add them to Routine Essentials!</Text>
            <Button size="sm" variant="link" leftIcon={<QuestionIcon />}>
              What are Routine Essentials?
            </Button>
          </>
        ) : (
          <>
            {Object.entries(routineEssentials)
              .slice(0, routineIsCollapsed ? 3 : routineEssentials.length)
              .map((entry) => {
                const [id] = entry;
                const item = ITEMS_MAP.get(id);
                if (item == null) {
                  return null;
                }
                return (
                  <Button
                    variant="ghost"
                    leftIcon={<AddIcon />}
                    _hover={{ bgColor: "none" }}
                    key={id}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    Add {item.name}
                  </Button>
                );
              })}
          </>
        )}
      </Flex>
    </>
  );
}
