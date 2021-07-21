import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

import React from "react";
import Rating from "react-rating";
import { ItemDetails } from "../../constants/item";

//TODO this bronken
export default function ExploreSidebar({
  itemSelected,
}: {
  itemSelected: ItemDetails;
}): React.ReactElement {
  return (
    <>
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
          About This Item sdaadasdasd
        </Heading>
        <Text textAlign="left">{itemSelected.details.description}</Text>
      </Stack>
    </>
  );
}
