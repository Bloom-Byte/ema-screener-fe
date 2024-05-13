import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

const NavModal = ({ isOpen, setIsOpen }) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>TREND CATCHER</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <span>
              This is Trend Catcher , it shows us current trend along with
              potential shift in trend based on EMA. Screener also have MH,MM
              and ML which will be refreshed after every Monday close of the
              week.
              <br></br>
              <br></br>
              Monday range is very crucial and it will help you determine your
              next trade based on this simple yet powerful range. MH - Monday
              Highs MM- Monday Mid ML- Monday Lows You can check the trend for
              various assets and various time frames such as m15, H1, H4, Daily
              and weekly.
              <br></br>
              <br></br>
              For any queries kindly contact{" "}
            </span>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => setIsOpen(false)}>
              Close
            </Button>
            {/* <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default NavModal;
