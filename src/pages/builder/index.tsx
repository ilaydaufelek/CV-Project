import { useState } from "react";
import Sidebar from "./sidebar";
import Preview from "./preview";
import { useIsMobile } from "../../hooks/use-mobil";
import Template from "./template";
import { useModal } from "../../store/modal/hooks";
import Modal from "../../modals";
import { _removeModal } from "../../store/modal/actions";


export default function Builder() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showTemplate,setShowTemplate]=useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });

  const mobil = useIsMobile();
  const modal=useModal()
  
  

  if(mobil){
    return(
       <div className="overflow-y-auto h-screen no-scrollbar">
        {modal.data && <Modal/>}
      
      <div className="h-16 w-full bg-[#18181b] font-semibold text-white z-40 fixed top-0 flex items-center justify-center">
        <div className="flex items-center justify-center w-full gap-2">
          <button
            className=" text-white rounded active:scale-95 transition-transform duration-100 "
            onClick={() => setShowSidebar(!showSidebar)}
          >
           <svg xmlns="http://www.w3.org/2000/svg"
            width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
           <path  d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,56H80V200H40ZM216,200H96V56H216V200Z">
            </path></svg>
          </button>
       CV
          <button
            className=" text-white rounded active:scale-95 transition-transform duration-100 "
            onClick={() => setShowTemplate(!showTemplate)}
          >
           <svg xmlns="http://www.w3.org/2000/svg"
            width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
           <path  d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,56H80V200H40ZM216,200H96V56H216V200Z">
            </path></svg>
          </button>
        </div>
      </div>

     
      {showSidebar && (
        <div className="fixed top-16 rigt-0  w-full h-[calc(100%-4rem)] bg-black flex justify-center z-50 overflow-y-auto">
          <Sidebar formData={formData} setFormData={setFormData}  />
        </div>
      )}

      {showTemplate && (
          <div className="fixed top-16 rigt-0  w-full h-[calc(100%-4rem)] bg-black flex justify-center z-50 overflow-y-auto">
          <Template/>
        </div>
      ) }

    
      {!showSidebar && !showTemplate && (
        <div className=" mt-2 ">
         <div className="h-full bg-black" >
           <Preview formData={formData} />
         </div>
        </div>
      )}
    </div>
    
    )
  }
 
  return (
    <div className="xl:grid xl:grid-cols-[500px_800px_620px] xl:h-screen lg:grid lg:grid-cols-[400px_500px_420px] lg:h-screen  md:grid md:grid-cols-[400px_500px_420px] md:h-screen ">
      {/* Sidebar */}
       {modal.data && <Modal/>}
      <div className="bg-[#0D0D10]  overflow-y-auto h-screen no-scrollbar">
     
        <Sidebar formData={formData} setFormData={setFormData}  />
      </div>

      {/* Preview */}
      <div className="  overflow-y-auto h-screen no-scrollbar w-full min-h-screen bg-black ">
        <div className="h-16 w-[800px] bg-[#101013] font-semibold text-white z-40 fixed flex items-center  justify-center " >
         
           {formData.fullName}CV</div>
        <Preview formData={formData} />
      </div>

      {/* Diğer */}
      <div className="bg-[#0D0D10]  z-50 overflow-y-auto h-screen no-scrollbar">
       <Template/>
      </div>
    
    </div>
    
  );
}
