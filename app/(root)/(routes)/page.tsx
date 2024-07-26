"use client"
import { useStoreModal } from "@/hooks/use-store-modal";
import { useTestModal } from "@/hooks/use-test-modal";
import { useEffect } from "react";
import zustand from "zustand";

const SetupPage=()=> {
  const onOpen = useStoreModal((state)=>state.onOpen);
  const isOpen = useStoreModal((state)=>state.isOpen);
  useEffect(()=>{
    if(!isOpen){
      onOpen();
    }
  },[isOpen,onOpen])

  return null;
}

export default SetupPage;
