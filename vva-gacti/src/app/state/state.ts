import { Animation } from "../models/animation";

export interface AnimationState {
  animationList: Animation[];
  selectedAnimation: Animation | null;
  errors: string | null;
  loading: boolean;
}
