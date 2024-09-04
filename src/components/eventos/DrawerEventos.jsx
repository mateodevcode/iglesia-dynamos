"use client";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Evento from "@/components/eventos/Evento";
import { Button } from "../ui/button";

function DrawerEventos({ imagenes: imagen, datosEvento }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        onClick={onOpen}
        className="text-white dark:text-white bg-blue-600 hover:bg-blue-400 dark:bg-red-600 dark:hover:bg-red-400"
      >
        Ver más
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent className="bg-white dark:bg-gray-950">
          <DrawerCloseButton
            bg={"black"}
            color={"white"}
            className="dark:bg-white dark:text-black bg-black text-white"
          />

          <DrawerBody className="bg-white dark:bg-gray-950">
            <Evento imagenes={imagen} datosEvento={datosEvento} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerEventos;
