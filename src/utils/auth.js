import useAuthStore from '@/stores/useAuthStore';

export function hasRole(requiredRole) {
  const { user } = useAuthStore.getState();
  return user?.role === requiredRole;
}

export function isEmailVerified() {
  const { user } = useAuthStore.getState();
  return !!user?.emailVerified;
}

export function isAuthenticated() {
  const { isAuthenticated } = useAuthStore.getState();
  return isAuthenticated;
}