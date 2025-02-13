"use client"
import { useEffect,useState } from "react"

import { StoreModal } from "@/components/modals/store-modal";
import TestModal from "@/components/modals/test-modal";

export const ModalProvider = ()=>{
    const [isMounted,setIsMounted] = useState(false);
    useEffect(()=>{
        setIsMounted(true);            
    },[])
    if(!isMounted){
        return null;
    }

    return (
        <>
            <StoreModal/>
            <TestModal/>
        </>
    )
}