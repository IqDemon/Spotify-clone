"use client";


import AuthModal from "@/components/AuthModal";
import Modal from "@/components/Modal";
import UploadModal from "@/components/UploadModal";
import React, { useEffect } from "react";
import { useState } from "react";

interface ModalProviderProps {
    children: React.ReactNode
}

const ModalProvider: React.FC<ModalProviderProps> = ({children}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null

}




  return <>
    <AuthModal></AuthModal>
    <UploadModal></UploadModal>
  {children}
</>;
};

export default ModalProvider;
