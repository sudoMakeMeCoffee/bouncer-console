import { create } from "zustand";

const useAuthFormStore = create((set) => ({
  isSignupOpen: false,
  isLoginOpen: false,
  isInfoOpen: false,

   info: {
    title: "",
    message: "",
  },


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

  openInfo: (title, message) =>
    set(() => ({
      isInfoOpen: true,
      isSignupOpen: false,
      isLoginOpen: false,
      info: { title, message } 
    })),

  closeSignup: () => set({ isSignupOpen: false }),
  closeLogin: () => set({ isLoginOpen: false }),
  closeInfo: () => set({ isInfoOpen: false, info: { title: "", message: "" }}),
}));

export default useAuthFormStore;
