import SidebarButtons from "../../components/sidebar-button";

type SidebarProps={
    formData:{
        fullName:string,
        email:string

    },
    setFormData:React.Dispatch<React.SetStateAction<{
         fullName:string,
        email:string
    }>> 
}


export default function Sidebar({formData,setFormData}:SidebarProps) {
 

  
  

  return (
    <div className=" z-50  flex     ">
     <SidebarButtons />
     <form action=''>
        <label htmlFor="fullName">FullName</label>
        <input  className="bg-white w-full" value={formData.fullName} onChange={e=>setFormData({...formData,fullName:e.target.value})} type="text" />
         <label htmlFor="email">Email</label>
        <input  value={formData.email} onChange={e=>setFormData({...formData, email:e.target.value})} type="text" />
     </form>
      
    </div>
  );
}
