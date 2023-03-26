import { createReducer, on } from '@ngrx/store';
import {
  createAnimationActionSuccess,
  deleteAnimationActionSuccess,
  loadAnimationListSuccess,
  selectAnimationAction,
  updateAnimationActionSuccess,
} from './action';
import { AnimationState } from './state';

export const animationState: Readonly<AnimationState> = {
  animationList: [],
  errors: null,
  loading: false,
  selectedAnimation: null,
};

export const animationReducer = createReducer(
  animationState,

  on(loadAnimationListSuccess, (state, props): AnimationState => {
    return {
      ...state,
      animationList: [...props.animations],
    };
  }),

  on(selectAnimationAction, (state, props): AnimationState => {
    return {
      ...state,
      selectedAnimation: props.animation,
    };
  }),

  on(createAnimationActionSuccess, (state, props): AnimationState => {
    return {
      ...state,
      animationList: [...state.animationList, { ...props.animation }],
    };
  }),

  on(deleteAnimationActionSuccess, (state, props): AnimationState => {
    return {
      ...state,
      animationList: state.animationList.filter((animation) => animation.codeAnimation !== props.animation.codeAnimation),
    };
  }),

  on(updateAnimationActionSuccess, (state, props): AnimationState => {
    return {
      ...state,
      animationList: state.animationList.map((animation) => {
        return animation.codeAnimation === props.animation.codeAnimation ? { ...props.animation } : animation;
      }),
    };
  })
);
