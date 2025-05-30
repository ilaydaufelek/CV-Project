import { useState } from 'react';
 type PreviewProps={
  formData:{
    fullName:string,
    email:string

  }
 }

export default function Preview({formData}:PreviewProps) {
  const [position, setPosition] = useState({ x: 50, y: 40 });
  const [isDragging, setIsDragging] = useState(false); // sürükleme işlemi
  const [offset, setOffset] = useState({ x: 0, y: 0 }); // tıkladığın yer

  const handleMouseDown = (e:React.MouseEvent) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e:React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
  
    
     <div
      className="w-[800px] h-[1500px]  bg-black relative z-10 "
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
       
      <div
        onMouseDown={handleMouseDown}
        className="absolute bg-white w-[650px] h-[850px] xl:m-6  my-6 mr-24 preview-box shadow-md select-none   "
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
      >
        Özgeçmiş
        <p>isim {formData.fullName}</p>
      </div>
    </div>
   
  );
}
