/* Import actions */
import { Actions, actionsInterface } from 'actions/Actions';

/* Import interfaces */
import { initialStateInterface } from 'contextProvider/contextProvider';



export interface NotesHandlerInterface {
    RANDOM_NUMBER: Function;
}

/*

The notes handler contains the notes actions

*/
export const NotesHandler = {
    [Actions.RANDOM_NUMBER]: (state: initialStateInterface, action:actionsInterface) =>{ console.log('hi'); return {...state, number: Math.floor(Math.random() * state.notes.length)}}
}

