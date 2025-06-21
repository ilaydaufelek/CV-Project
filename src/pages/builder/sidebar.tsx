import { useRef,} from "react";
import SidebarButtons from "../../components/sidebar-button";
import { useIsMobile } from "../../hooks/use-mobil";
import { _setModal } from "../../store/modal/actions";


type SidebarProps={
    formData:{
        fullName:string,
        email:string

    },
    setFormData:React.Dispatch<React.SetStateAction<{
         fullName:string,
        email:string
    }>>,
   
}
type Experience = {
  name: string;
  startD: string;
  endD: string;
};
type Education={
  name:string
}

export default function Sidebar({formData,setFormData}:SidebarProps) {

 const resume=JSON.parse(localStorage.getItem('resume')|| '{}')
 console.log(resume);
 
 const experiences : Experience[]=resume.experiences || []
 const education:Education[]=resume.education || []
  const handleClick=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

  }
const mobil =useIsMobile()
  const divRef={
    basics:useRef<HTMLDivElement>(null),
    summary:useRef<HTMLDivElement>(null),
    experience:useRef<HTMLDivElement>(null),
    education:useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    languages:useRef<HTMLDivElement>(null),
  }

  return (
 <div className="flex min-h-screen">
  
  {mobil ? <div></div> : (
    <div className="fixed top-0 left-0 w-24 h-full flex items-center justify-center bg-[#0D0D10] z-10"> 
      <SidebarButtons divRef={divRef}/>
     
    </div>
  )}

 
   <div className="flex flex-col flex-1 mx-4 xl:ml-24 xl:mx-4 lg:ml-24 lg:mx-4 md:ml-20 md:mx-4 ">
    
   <form onSubmit={handleClick} className=" " action="">
    <div className="flex flex-col space-y-2 " ref={divRef.basics} >
      <div className="text-white text-[23px] font-semibold flex items-center gap-2 xl:gap-4 xl:my-4 my-4 " >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256"><path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z">
        </path></svg>
         Personal Information </div>
        <label  className=" text-white font-semibold  " >Full Name</label>
      <input
      
        className=" border border-[#27272a] p-2 w-full h-9 rounded-md text-white outline-none autofill:bg-none "
        value={formData.fullName}
        onChange={(e) =>
          setFormData({ ...formData, fullName: e.target.value })
        }
        type="text"
      />

      <label className="text-white ">Email</label>
      <input
     
        className="border border-[#27272a] p-2 w-full h-9 rounded-md text-white outline-none autofill:bg-none "
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
        type="text"
      />
     <div className="flex gap-4">
  
  <div className="flex flex-col">
    <label className="text-white mb-1">Phone</label>
    <input className="border border-[#27272a] p-2 w-full h-9 rounded-md text-white outline-none autofill:bg-none " />
  </div>

  
  <div className="flex flex-col">
    <label className="text-white mb-1">Location</label>
    <input className="border border-[#27272a] p-2 w-full h-9 rounded-md text-white outline-none autofill:bg-none " />
  </div>
</div>
      
    </div>
    <div className="bg-[#27272a] h-[1px] w-full xl:my-6 my-4 " />
    <div ref={divRef.summary} className="flex flex-col space-y-2  " >
      <div className="text-white text-[23px] flex items-center gap-4 font-semibold my-4 " >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256">
        <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM184,96a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,96Zm0,32a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,128Zm0,32a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,160Z">
        </path></svg>
        About Me</div>
        <textarea className="text-white w-full border border-[#27272a] p-2 rounded-md outline-none  " name="aboutMe" id=""/>
       </div>
       
     <div className="bg-[#27272a] h-[1px] w-full xl:my-6 my-4 " />
     <div ref={divRef.experience} className="flex flex-col space-y-2" >
       <div className="text-white text-[23px] flex items-center gap-4 font-semibold my-4 " >
       <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256">
       <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z">
      </path></svg>
        Experience</div>
        {experiences.length > 0 ? (
      experiences.map((exp, i) => (
        <div key={i} className="text-white p-2 border-b border-[#27272a]">
          <p>{exp.name}</p>
          <p>{exp.startD} - {exp.endD}</p>
          
        </div>
        
      ))
        ):(
           <button onClick={() => _setModal({}, "Experience")} className="w-full h-24 m-1 outline outline-[#27272a] outline-dotted flex items-center justify-center  hover:bg-[#27272aa2]">
    <p className="text-white flex items-center justify-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256">
        <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z" />
      </svg>
      Add New Item
    </p>
  </button>
        )}
     


     </div>

     <div ref={divRef.education} className="flex flex-col space-y-2" >
       <div className="text-white text-[23px] flex items-center gap-4 font-semibold my-4 " >
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256"><path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z">
        </path></svg>
        Education</div>
        {education.length >0 ? (
          education.map((e,index)=>(
            <div className="text-white" key={index} >{e.name}</div>
          ))

        ):(
          <button onClick={()=>_setModal({},'Education')} className="w-full  h-24 m-1 outline outline-[#27272a] outline-dotted flex items-center justify-center hover:bg-[#27272aa2] " >
          <p className="text-white flex items-center justify-center gap-2 " >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"/>
          </svg> Add New Item
          </p>

          
        </button>
        )}
       

     </div>
     <div ref={divRef.skills} className="flex flex-col space-y-2" >
       <div className="text-white text-[23px] flex items-center gap-4 font-semibold my-4 " >
     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256"><path d="M215.12,123.64a8,8,0,1,0-14.24-7.28,79.58,79.58,0,0,1-33.08,33.5l-16.58-37.32A40,40,0,0,0,136,40.8V24a8,8,0,0,0-16,0V40.8a40,40,0,0,0-15.22,71.74L56.69,220.75a8,8,0,1,0,14.62,6.5l25.14-56.56A95.48,95.48,0,0,0,128,176a99.13,99.13,0,0,0,31.6-5.21l25.09,56.46a8,8,0,0,0,14.62-6.5l-25-56.25A95.81,95.81,0,0,0,215.12,123.64ZM128,56a24,24,0,1,1-24,24A24,24,0,0,1,128,56Zm0,104a79.52,79.52,0,0,1-25-4l16.42-36.94a39.81,39.81,0,0,0,17.2,0l16.48,37.06A83.21,83.21,0,0,1,128,160Z">
      </path></svg>
        Skills</div>
        <button onClick={()=>_setModal({},'Skills')} className="w-full h-24 m-1 outline outline-[#27272a] outline-dotted flex items-center justify-center hover:bg-[#27272aa2] " >
          <p className="text-white flex items-center justify-center gap-2 " >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"/>
          </svg> Add New Item
          </p>

          
        </button>

     </div>

     <div ref={divRef.languages} className="flex flex-col space-y-2 my-4 xl:my-4 lg:my-4 md:my-4 " >
       <div className="text-white text-[23px] flex items-center gap-4 font-semibold my-4 " >
     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256"><path d="M247.15,212.42l-56-112a8,8,0,0,0-14.31,0l-21.71,43.43A88,88,0,0,1,108,126.93,103.65,103.65,0,0,0,135.69,64H160a8,8,0,0,0,0-16H104V32a8,8,0,0,0-16,0V48H32a8,8,0,0,0,0,16h87.63A87.76,87.76,0,0,1,96,116.35a87.74,87.74,0,0,1-19-31,8,8,0,1,0-15.08,5.34A103.63,103.63,0,0,0,84,127a87.55,87.55,0,0,1-52,17,8,8,0,0,0,0,16,103.46,103.46,0,0,0,64-22.08,104.18,104.18,0,0,0,51.44,21.31l-26.6,53.19a8,8,0,0,0,14.31,7.16L148.94,192h70.11l13.79,27.58A8,8,0,0,0,240,224a8,8,0,0,0,7.15-11.58ZM156.94,176,184,121.89,211.05,176Z">
      </path></svg>
       Languages</div>
        <button onClick={()=>_setModal({},'Languages')} className="w-full  h-24 m-1 outline outline-[#27272a] outline-dotted flex items-center justify-center hover:bg-[#27272aa2] " >
          <p className="text-white flex items-center justify-center gap-2 " >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"/>
          </svg> Add New Item
          </p>

          
        </button>

     </div>
    </form>
  </div>
</div>

  );
}
