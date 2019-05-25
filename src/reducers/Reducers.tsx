/* Import actions */
import { Actions, RandomNumberInterface, CheckAnswerInterface } from 'actions/Actions';

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
  [Actions.ANSWER_CORRECT]: (
    state: InitialStateInterface,
    action: CheckAnswerInterface
  ) => {
    return { ...state, answerCorrect: action.answer  };
  }
};
