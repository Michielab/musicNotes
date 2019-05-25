import React, { useReducer, createContext, useContext, ReactNode } from 'react';

/* Import actions */
import { GeneralAction } from 'actions/Actions';

/* Import Reducers */
import { NotesHandler, NotesHandlerInterface } from 'reducers/Reducers';

// create context object containing Provider and Consumer
export const StateContext = createContext({});

/* 
Functional component that wraps children with Provider,
the Provider accepts a value prop. Which is used to set the value in the Provider.

useReducer accept reducer and initialState which are passed as a props from outside. 
So you have full control over them inside your app as you will see below.

The main trick here is that we pass result of the useReducer hook as a value to our Provider. 
So it becomes available in any component in your app component tree.

*/

export interface InitialStateInterface {
    notes: string[]
    number: number
}

export const initialState:InitialStateInterface = {
    notes: ['','','','',''],
    number: 0
}


/*

The main handler contains all the different handlers and is used in the main reducer. 

*/
const mainHandler = {
    ...NotesHandler
};

/*



*/

export function mainReducer(state = initialState, action: GeneralAction) {
    const handler = mainHandler[action.type]
    return handler ? handler(state, action) : state
}

export const StateProvider = ({
  reducer,
  initialState,
  children
}: {
  reducer: any;
  initialState: InitialStateInterface;
  children: ReactNode;
}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue:Function = () => useContext(StateContext);
