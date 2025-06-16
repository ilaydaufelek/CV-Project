import modals from "../routes/modals";
import { useModal } from "../store/modal/hooks";
import { _removeModal } from "../store/modal/actions"; 

export default function Modal() {
  const modal = useModal();
  const currentModal = modals.find((m) => m.name === modal.name);

  if (!modal.data) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-30">
      {currentModal && (
        <currentModal.element close={_removeModal} />
      )}
    </div>
  );
}
