import { createReducer, on } from '@ngrx/store';
import {
  createActiviteActionSuccess,
  deleteActiviteActionSuccess,
  loadActiviteListSuccess,
  selectActiviteAction,
  updateActiviteActionSuccess,
} from './action';
import { ActiviteState } from './state';

export const activiteState: Readonly<ActiviteState> = {
  activiteList: [],
  errors: null,
  loading: false,
  selectedActivite: null,
};

export const activiteReducer = createReducer(
  activiteState,

  on(loadActiviteListSuccess, (state, props): ActiviteState => {
    return {
      ...state,
      activiteList: [...props.activites],
    };
  }),

  on(selectActiviteAction, (state, props): ActiviteState => {
    return {
      ...state,
      selectedActivite: props.activite,
    };
  }),

  on(createActiviteActionSuccess, (state, props): ActiviteState => {
    return {
      ...state,
      activiteList: [...state.activiteList, { ...props.activite }],
    };
  }),

  on(deleteActiviteActionSuccess, (state, props): ActiviteState => {
    return {
      ...state,
      activiteList: state.activiteList.filter(
        activite =>
          activite.codeAnimation !== props.activite.codeAnimation &&
          activite.date !== props.activite.date
      ),
    };
  }),

  on(updateActiviteActionSuccess, (state, props): ActiviteState => {
    return {
      ...state,
      activiteList: state.activiteList.map(activite => {
        return activite.codeAnimation === props.activite.codeAnimation &&
          activite.date === props.activite.date
          ? { ...props.activite }
          : activite;
      }),
    };
  })
);
