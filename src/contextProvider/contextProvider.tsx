import React, { useReducer, createContext, useContext, ReactNode } from 'react';

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

interface initialStateInterface {
    notes: string[]
    number: number
}

const initialState:initialStateInterface = {
    notes: [''],
    number: 0
}

// const reducer = (state, action) => {
//     switch (action.type) {
//       case 'changeTheme':
//         return {
//           ...state,
//           theme: action.newTheme
//         };
        
//       default:
//         return state;
//     }
//   };





export const Actions = {
    RANDOM_NUMBER: 'RANDOM_NUMBER'
}  

interface actionsInterface {
    RANDOM_NUMBER?: string;
}

export const NotesHandler = {
    [Actions.RANDOM_NUMBER]: (state: initialStateInterface) => ({...state, number: Math.floor(Math.random() * state.notes.length)})
}

const mainHandler = {
    ...NotesHandler
};

function mainReducer(state = initialState, action: actionsInterface) {
    const handler = mainHandler[action.type]
    return handler ? handler(state, action) : state
}

export const StateProvider = ({
  reducer,
  initialState,
  children
}: {
  reducer: any;
  initialState: initialStateInterface;
  children: ReactNode;
}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
