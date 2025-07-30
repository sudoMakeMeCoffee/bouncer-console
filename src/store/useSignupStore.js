import { create } from 'zustand';

const useSignupStore = create((set) => ({
  isSignupOpen: false,
  openSignup: () => set({ isSignupOpen: true }),
  closeSignup: () => set({ isSignupOpen: false }),
}));

export default useSignupStore;