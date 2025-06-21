import { useState } from "react"

type EducationProps={
    close:()=>void
}

export default function Education ({close}:EducationProps){
    const [educ,setEduc]=useState({
        name:''
    })
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        close()
        const prev= JSON.parse(localStorage.getItem('resume') || '{}')
        const prevEducation = prev.education || [];
        const updatedEducation = [...prevEducation, educ];
        const updateResume= {...prev,
            education:updatedEducation
        }
        localStorage.setItem('resume',JSON.stringify(updateResume))


    }
    return(
        <div className="bg-white p-4 rounded text-black" >
           <form onSubmit={handleSubmit} action="">
            <input value={educ.name} 
            onChange={(e)=>setEduc({...educ, name:e.target.value})}
            type="text" />
            <button type="submit" className="ml-4 px-2 py-1 bg-red-500 text-white rounded">
        Kapat
      </button>
      </form>
        </div>
    )
}