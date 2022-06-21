import { atom } from "recoil";

export interface AuthModalState {
  open: boolean;
  view: ModalView;
}

export type ModalView = "login" | "signup" | "resetPassword";

const defaultModalState: AuthModalState = {
  open: false,
  view: "login",
};

export const AuthModalState = atom<AuthModalState>({
  key: "AuthModalState",
  default: defaultModalState,
});
