import { create } from "zustand";

const useAuthFormStore = create((set) => ({
  isSignupOpen: false,
  isLoginOpen: false,
  isInfoOpen: false,



  openSignup: () =>
    set(() => ({
      isSignupOpen: true,
      isLoginOpen: false,
      isInfoOpen: false,
    })),

  openLogin: () =>
    set(() => ({
      isLoginOpen: true,
      isSignupOpen: false,
      isInfoOpen: false,
    })),

  openInfo: () =>
    set(() => ({
      isInfoOpen: true,
      isSignupOpen: false,
      isLoginOpen: false,
    })),

  closeSignup: () => set({ isSignupOpen: false }),
  closeLogin: () => set({ isLoginOpen: false }),
  closeInfo: () => set({ isInfoOpen: false}),
}));

export default useAuthFormStore;
