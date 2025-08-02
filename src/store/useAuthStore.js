import { create } from 'zustand';

const useAuthStore = create((set) => ({
    isAuthenticated: false,
    user: null,

    setUser: (user) => set({ user }),
    setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
}));

export default useAuthStore;
