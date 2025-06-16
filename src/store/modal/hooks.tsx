

import { useSelector } from "react-redux";
import type { RootState } from "..";

export const useModal=()=>useSelector((state:RootState)=>state.modal)