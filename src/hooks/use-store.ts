import {useContext} from "react";
import {StoreContext} from "../store";

/**
 * Хук для доступа к объекту хранилища
 */
export default function useStore() {
  return useContext(StoreContext);
}