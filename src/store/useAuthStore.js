import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null, // { id, email, username, role, emailVerified }
  loading: true,
  setUser: (user) => set({ user }),
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  logout: () => set({ isAuthenticated: false, user: null }),
  setLoading: (loading) => set({ loading }),
}));

export default useAuthStore;
