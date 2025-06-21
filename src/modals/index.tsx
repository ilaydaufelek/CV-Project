import modals from "../routes/modals";
import { useModal } from "../store/modal/hooks";
import { _removeModal } from "../store/modal/actions"; 
import { useIsMobile } from "../hooks/use-mobil";
import { Sheet, SheetContent } from "../components/ui/sheet";
import { useEffect, useState } from "react";

export default function Modal() {
  const modal = useModal();
  const currentModal = modals.find((m) => m.name === modal.name);

  if (!modal.data) return null;
  const mobil =useIsMobile()
  const [open,setOpen]=useState(false)

  useEffect(()=>{
    if(modal.data){
      setOpen(true)
    }
    else{
      setOpen(false)
    }

  },[modal.data])
  const handleClose=()=>{
    setOpen(false)
    _removeModal()
  }

  return (
   <>
    {mobil ? (
      <Sheet open={open} onOpenChange={setOpen} >
  
  <SheetContent side="bottom" >
    {currentModal && (
        <currentModal.element close={handleClose}   />
      )}
  </SheetContent>
</Sheet>
    ):(
      <div className="xl:fixed xl:inset-0 xl:bg-black/80 xl:flex xl:justify-center xl:items-center xl:z-[30] lg:fixed lg:inset-0 lg:bg-black/80 lg:flex lg:justify-center lg:items-center lg:z-[30]  
      md:fixed md:inset-0 md:bg-black/80 md:flex md:justify-center md:items-center md:z-[30]  ">
      {currentModal && (
        <currentModal.element close={handleClose}   />
      )}
    </div>
    )}
   </>
  );
}
