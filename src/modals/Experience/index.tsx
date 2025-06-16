type ExperienceProps = {
  close: () => void;
 
};

export default function Experience({ close}: ExperienceProps) {
  return (
    <div className="bg-white p-4 rounded text-black">
      deneme!
      <button onClick={close} className="ml-4 px-2 py-1 bg-red-500 text-white rounded">
        Kapat
      </button>
    </div>
  );
}
