
import { removeModal, setModal } from ".";
import store from "..";

export const _setModal=(data:any,name:string)=>store.dispatch(setModal({data,name}))
export const _removeModal=()=>store.dispatch(removeModal())