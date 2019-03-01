import { Dispatch } from "redux"
import { IResult, ITranscript } from "../../interfaces"

////////////
// CREATE //
////////////

export const createTranscript = () => (dispatch: Dispatch) => {
  dispatch({
    type: "TRANSCRIPT_CREATED",
  })
}

//////////
// READ //
//////////

export const readResults = (results: IResult[]) => (dispatch: Dispatch) => {
  dispatch({
    results,
    type: "READ_RESULTS",
  })
}

////////////
// UPDATE //
////////////

export const updateWords = (resultIndex: number, wordIndexStart: number, wordIndexEnd: number, words: string[], recalculate: boolean) => (dispatch: Dispatch, getState) => {
  dispatch({
    recalculate,
    resultIndex,
    type: "UPDATE_WORDS",
    wordIndexEnd,
    wordIndexStart,
    words,
  })
}

export const updateSpeaker = (resultIndex: number, speaker: number) => (dispatch: Dispatch) => {
  dispatch({
    resultIndex,
    speaker,
    type: "UPDATE_SPEAKER",
  })
}

export const updateSpeakerName = (speaker: number, name: string, resultIndex?: number) => (dispatch: Dispatch) => {
  dispatch({
    name,
    resultIndex,
    speaker,
    type: "UPDATE_SPEAKER_NAME",
  })
}

//////////
// DELETE//
//////////

export const deleteWords = (resultIndex: number, wordIndexStart: number, wordIndexEnd: number) => (dispatch: Dispatch) => {
  dispatch({
    name,
    resultIndex,
    type: "DELETE_WORDS",
    wordIndexEnd,
    wordIndexStart,
  })
}

//////////
// OTHER//
//////////

export const joinResults = (resultIndex: number, wordIndex: number) => (dispatch: Dispatch) => {
  dispatch({
    resultIndex,
    type: "JOIN_RESULTS",
    wordIndex,
  })
}

export const splitResults = (resultIndex: number, wordIndex: number) => (dispatch: Dispatch) => {
  dispatch({
    resultIndex,
    type: "SPLIT_RESULTS",
    wordIndex,
  })
}

export const selectTranscript = (transcriptId: string, transcript: ITranscript) => (dispatch: Dispatch) => {
  dispatch({
    transcript,
    transcriptId,
    type: "SELECT_TRANSCRIPT",
  })
}
