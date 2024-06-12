import {useReducer, createContext} from "react";
import {initialState, reducer} from "./notes";
import {IAction} from "../types/i-action";
import {IState} from "../types/i-state";

interface IProvider {
  children: React.ReactNode;
}

interface IContext {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}

export const StoreContext = createContext<IContext>({
  state: initialState,
  dispatch: () => {},
});

export const StoreProvider: React.FC<IProvider> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {children}
    </StoreContext.Provider>
  )
}