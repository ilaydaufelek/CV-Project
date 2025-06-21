
import { useState } from "react";


type ExperienceProps = {
  close: () => void;
  
};

export default function Experience({ close,}: ExperienceProps) {
 
   const [exp, setExp] = useState({
    name: "",
    startD: "",
    endD: "",
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   const prev = JSON.parse(localStorage.getItem("resume") || "{}");

    const updatedResume = {
      ...prev,
      experiences: [...(prev.experiences || []), exp],
    };

    localStorage.setItem("resume", JSON.stringify(updatedResume));
    close();

    
  };


  return (
    <div className="bg-white p-4 rounded text-black">
      <form onSubmit={handleSubmit}>
        <input
        onChange={(e)=>setExp({...exp , name:e.target.value})}
       value={exp.name}
          type="text"
        
          className="p-2 border rounded"
        />
        <button 
          type="submit" 
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Save
        </button>
        
      </form>
    </div>
  );
}