/* Import actions */
import {
  Actions,
  RandomNumberInterface,
  CorrectAnswerInterface,
  WrongAnswerInterface,
  TogglePLayInterface
} from 'actions/Actions';

/* Import interfaces */
import { InitialStateInterface } from 'contextProvider/contextProvider';

export interface NotesHandlerInterface {
  RANDOM_NUMBER: Function;
}

/*

The notes handler contains the notes actions

*/
export const NotesHandler = {
  [Actions.RANDOM_NUMBER]: (
    state: InitialStateInterface,
    action: RandomNumberInterface
  ) => {
    return { ...state, number: Math.floor(Math.random() * action.notesLength) };
  },
  [Actions.CORRECT_ANSWER]: (
    state: InitialStateInterface,
    action: CorrectAnswerInterface
  ) => {
    return { ...state, score: state.score + 25 };
  },
  [Actions.WRONG_ANSWER]: (
    state: InitialStateInterface,
    action: WrongAnswerInterface
  ) => {
    return { ...state, score: state.score - 25 };
  },
  [Actions.TOGGLE_PLAY]: (
    state: InitialStateInterface,
    action: TogglePLayInterface
  ) => {
    return { ...state, play: !state.play };
  }
};
