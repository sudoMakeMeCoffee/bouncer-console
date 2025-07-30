import { create } from 'zustand';

const useAuthFormStore = create((set) => ({
  isSignupOpen: false,
  isLoginOpen: false,

  openSignup: () =>
    set(() => ({
      isSignupOpen: true,
      isLoginOpen: false, // Close login when opening signup
    })),

  openLogin: () =>
    set(() => ({
      isLoginOpen: true,
      isSignupOpen: false, // Close signup when opening login
    })),

  closeSignup: () => set({ isSignupOpen: false }),
  closeLogin: () => set({ isLoginOpen: false }),
}));

export default useAuthFormStore;
