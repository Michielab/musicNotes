export interface RandomNumberInterface {
  type: string;
  notesLength: number;
}

export interface CorrectAnswerInterface {
  type: string;
}

export interface WrongAnswerInterface {
  type: string;
}

export interface TogglePLayInterface {
  type: string;
}

export interface GeneralAction
  extends RandomNumberInterface,
    CorrectAnswerInterface,
    WrongAnswerInterface,
    TogglePLayInterface {}

export const Actions = {
  RANDOM_NUMBER: 'RANDOM_NUMBER',
  CORRECT_ANSWER: 'CORRECT_ANSWER',
  WRONG_ANSWER: 'WRONG_ANSWER',
  TOGGLE_PLAY: 'TOGGLE_PLAY'
};
