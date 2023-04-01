import { createReducer, on } from '@ngrx/store';
import {
  createAnimationActionSuccess,
  createAnimationActivteSuccess,
  deleteAnimationActionSuccess,
  loadAnimationListSuccess,
  selectAnimationAction,
  updateAnimationActionSuccess,
  updateAnimationActiviteAction,
  updateAnimationActiviteSuccess,
  updateAnimationInscriptionActionSuccess,
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
      animationList: state.animationList.filter(
        animation => animation.codeAnimation !== props.animation.codeAnimation
      ),
    };
  }),

  on(updateAnimationActionSuccess, (state, props): AnimationState => {
    return {
      ...state,
      animationList: state.animationList.map(animation => {
        return animation.codeAnimation === props.animation.codeAnimation
          ? { ...props.animation }
          : animation;
      }),
    };
  }),

  on(createAnimationActivteSuccess, (state, props): AnimationState => {
    return {
      ...state,
      animationList: state.animationList.map(animation => {
        return animation.codeAnimation === props.activite.codeAnimation
          ? {
              ...animation,
              listActivite: animation.listActivite
                ? animation.listActivite.concat(props.activite)
                : [props.activite],
            }
          : animation;
      }),
    };
  }),

  on(updateAnimationActiviteSuccess, (state, props): AnimationState => {
    const animationIndex = state.animationList?.findIndex(
      animation => animation.codeAnimation === props.activite.codeAnimation
    );

    if (state.animationList !== null) {
      const animationToUpdate = state.animationList[animationIndex];
      const activiteIndex = animationToUpdate.listActivite?.findIndex(
        activite =>
          activite.codeAnimation === props.activite.codeAnimation &&
          activite.date === props.activite.date
      );
      if (
        animationToUpdate.listActivite !== null &&
        activiteIndex !== undefined
      ) {
        const oldListActivite = animationToUpdate.listActivite.filter(
          (activite, index) => index !== activiteIndex
        );
        const newListActivite = oldListActivite.concat(props.activite);
        return {
          ...state,
          animationList: state.animationList.map(animation => {
            return animation.codeAnimation === props.activite.codeAnimation
              ? {
                  ...animation,
                  listActivite: animation.listActivite
                    ? newListActivite
                    : [props.activite],
                }
              : animation;
          }),
        };
      }
    }
    return {
      ...state,
      animationList: state.animationList.map(animation => {
        return animation;
      }),
    };
  })
);
