import request from "../../api";
import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  SELECTED_VIDEO_FAIL,
  SELECTED_VIDEO_REQUEST,
  SELECTED_VIDEO_SUCCESS,
} from "../actionTypes";

const initialState = {
  videos: [],
  loading: false,
  nextPageToken: null,
  activeCategory: "All",
};

export const homeVideosReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case HOME_VIDEOS_SUCCESS:
      return {
        ...state,
        videos:
          state.activeCategory === payload.category
            ? [...state.videos, ...payload.videos]
            : payload.videos,

        loading: false,
        nextPageToken: payload.nextPageToken,
        activeCategory: payload.category,
      };

    case HOME_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case HOME_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

const selectedVideoInitialState = {
  loading: true,
  video: null,
};
export const selectedVideoReducer = (
  state = selectedVideoInitialState,
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case SELECTED_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
        video: null,
      };

    case SELECTED_VIDEO_SUCCESS:
      return {
        ...state,
        loading: false,
        video: payload,
      };

    case SELECTED_VIDEO_FAIL:
      return {
        ...state,
        loading: false,
        video: null,
        error: payload,
      };
    default:
      return state;
  }
};
