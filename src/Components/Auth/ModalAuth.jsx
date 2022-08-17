import {
  Modal,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalOverlay,
  useDisclosure,
  Text,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Login } from "./Login";

function ModalAuth() {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <FiLogIn
        size="20px"
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      />

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Login />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalAuth;
