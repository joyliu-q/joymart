import {
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
import React from "react";

export default function ConfirmDeletePopover({
  removeFrom,
  onConfirm,
}: {
  removeFrom: string;
  onConfirm: () => void;
}) {
  const [confirmDeleteOpen, setConfirmDeleteOpen] = React.useState(false);

  return (
    <Popover
      returnFocusOnClose={false}
      autoFocus={false}
      isOpen={confirmDeleteOpen}
      onClose={() => setConfirmDeleteOpen(confirmDeleteOpen)}
      placement="right"
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Button
          variant={"ghost"}
          bgColor={"grey.100"}
          color={"gray.400"}
          _hover={{
            bgColor: "grey.100",
            color: "red",
          }}
          _active={{
            bgColor: "none",
          }}
          _focus={{ border: "none" }}
          onClick={() => setConfirmDeleteOpen(!confirmDeleteOpen)}
        >
          Remove from {removeFrom}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
        <PopoverArrow />
        <PopoverBody>
          Are you sure you want to remove this item from {removeFrom}?
        </PopoverBody>
        <PopoverFooter d="flex" justifyContent="flex-end">
          <ButtonGroup size="sm">
            <Button
              variant="outline"
              onClick={() => setConfirmDeleteOpen(!confirmDeleteOpen)}
            >
              Cancel
            </Button>
            <Button colorScheme="red" onClick={onConfirm}>
              Remove
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}
