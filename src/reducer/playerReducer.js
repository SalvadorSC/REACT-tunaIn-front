import { useReducer } from 'react';

const initialState = {
  trackToReproduce: [],
  currentPlay: undefined,
};

export const playerActions = {
  LOAD_SONGS: 'LOAD_SONGS',
  //ADD_SONG: 'ADD_SONG',
  NEXT_SONG: 'NEXT_SONG',
  REPRODUCE_IT_SONG: 'REPRODUCE_IT_SONG',
  START_PLAY: 'START_PLAY',
  PREV_SONG: 'PREV_SONG',
};

const reducer = (state, action) => {
  const newState = { ...state };

  switch (action.type) {
    case playerActions.START_PLAY:
      newState.trackToReproduce = action.songs;
      newState.currentPlay = 0;
      return newState;
    case playerActions.LOAD_SONGS:
      newState.trackToReproduce = action.songs;
      return newState;
    /*case playerActions.ADD_SONG:
      newState.trackToReproduce = [...state.trackToReproduce, action.song];
      return newState;*/
    case playerActions.NEXT_SONG:
      if (state.currentPlay < (state.trackToReproduce.length -1)) {
        newState.currentPlay = state.currentPlay + 1;
      }
      return newState;

    case playerActions.PREV_SONG:
      if (state.currentPlay > 0) {
        newState.currentPlay = state.currentPlay - 1;
      }
      return newState;

    case playerActions.REPRODUCE_IT_SONG:
      newState.currentPlay = action.index;
      return newState;

    default:
      return state;
  }
};

export const usePlayerReducer = () => useReducer(reducer, initialState);