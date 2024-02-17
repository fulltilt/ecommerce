"use client";

import { useEffect, useState } from "react";

import { StoreModal } from "@/components/modals/store-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // if we're on server side
  if (!isMounted) {
    return null;
  }

  // if we're on client side
  return (
    <>
      <StoreModal />
    </>
  );
};
