export interface RandomNumberInterface {
    type: string;
    notesLength: number;
}

export interface CheckAnswerInterface {
    type: string;
    answer: boolean;
}


export interface GeneralAction extends RandomNumberInterface, CheckAnswerInterface {

}

export const Actions = {
    RANDOM_NUMBER: 'RANDOM_NUMBER',
    ANSWER_CORRECT: 'ANSWER_CORRECT'
}  
