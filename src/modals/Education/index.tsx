
type EducationProps={
    close:()=>void
}

export default function Education ({close}:EducationProps){
    return(
        <div className="bg-white p-4 rounded text-black" >
            deneme eğitim bilgileri!!
            <button onClick={close} className="ml-4 px-2 py-1 bg-red-500 text-white rounded">
        Kapat
      </button>
        </div>
    )
}