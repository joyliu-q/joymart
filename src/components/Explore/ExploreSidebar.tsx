import { Center, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

import React from "react";
import Rating from "react-rating";
import { ItemDetails } from "../../constants/item";

//TODO this bronken
export default function ExploreSidebar({
  itemSelected = null,
}: {
  itemSelected?: ItemDetails | null;
}): React.ReactElement {
  if (itemSelected == null) {
    return (
      <Center bgColor="white" minHeight="250px" p={8}>
        <Image boxSize="100px" src="/graphics/martha.svg" mr="20px" />
        <Flex flexDir="column" textAlign="left">
          <Heading as="h5" size="md" fontWeight={500} mb={2}>
            You haven't selected any items yet
          </Heading>
          <Text>Click on an item to see more details!</Text>
        </Flex>
      </Center>
    );
  }
  return (
    <Flex flexDir="column" bgColor="white" minHeight="150px" p={8}>
      <Flex>
        <Image src={itemSelected.image} boxSize="100px" mr={4} />
        <Flex
          flexDir="column"
          textAlign="left"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Heading as="h5" size="md" fontWeight={500}>
            {itemSelected.name}
          </Heading>
          <Rating
            readonly
            initialRating={itemSelected.rating}
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
          <Flex justifyContent="space-between">
            <Stack direction={"row"} align={"center"}>
              <Text fontWeight={800} fontSize={"xl"}>
                ${itemSelected.price.default}
              </Text>
              <Text color={"gray.600"}>{itemSelected.price.unit}</Text>
            </Stack>
          </Flex>
        </Flex>
      </Flex>

      <Stack spacing={2} my={5}>
        <Heading as="h5" size="sm" textAlign="left">
          About This Item
        </Heading>
        <Text textAlign="left">{itemSelected.details.description}</Text>
      </Stack>
    </Flex>
  );
}
