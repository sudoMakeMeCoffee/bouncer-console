import { create } from "zustand";

const useAuthStore = create((set) => ({
    isAuthenticated: false,
    user: {
        id: null,
        username: "",
        email: "",  
        role: "",
    },

    setUser: (user) => set({ user }),
    setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
}))

export default useAuthStore;