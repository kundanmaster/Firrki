import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";

type CustomModalProps = {
  title: string;
  bodyContent: React.ReactNode;
  footerActions: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full";
  isOpen: boolean;
  onClose: () => void;
};

const CustomModal: React.FC<CustomModalProps> = ({ title, bodyContent, footerActions, size = "md", isOpen, onClose }) => {
  return (
    <Modal size={size} isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
          <ModalBody>{bodyContent}</ModalBody>
          <ModalFooter>{footerActions}</ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
