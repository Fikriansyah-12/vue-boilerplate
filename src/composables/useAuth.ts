import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useApi } from './useApi'
import type { User } from '@/types'

interface LoginCredentials {
  email: string
  password: string
}

export function useAuth() {
  const authStore = useAuthStore()
  const { isLoading, error } = useApi()
  const isAuthLoading = ref(false)

  const login = async (credentials: LoginCredentials) => {
    isAuthLoading.value = true
    try {
      // Simulate API call - in production, uncomment actual API call
      // const { data, error: apiError } = await post<LoginResponse>('/auth/login', credentials)
      
      // Demo: Simulate successful login
      const mockUser: User = {
        id: '1',
        name: 'John Doe',
        email: credentials.email,
        role: 'admin',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=john'
      }
      const mockToken = 'mock_token_' + Date.now()
      
      authStore.login(mockUser, mockToken)
      return { success: true }

      // Uncomment below for actual API integration:
      // if (apiError) {
      //   return { success: false, error: apiError.message }
      // }
      // if (data) {
      //   authStore.login(data.user, data.token)
      //   return { success: true }
      // }
      // return { success: false, error: 'Login failed' }
    } finally {
      isAuthLoading.value = false
    }
  }

  const logout = () => {
    authStore.logout()
  }

  const register = async (userData: any) => {
    isAuthLoading.value = true
    try {
      // Simulate API call - in production, uncomment actual API call
      // const { data, error: apiError } = await post<LoginResponse>('/auth/register', userData)
      
      // Demo: Simulate successful registration
      const mockUser: User = {
        id: String(Date.now()),
        name: userData.name,
        email: userData.email,
        role: 'user',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + userData.email
      }
      const mockToken = 'mock_token_' + Date.now()
      
      authStore.login(mockUser, mockToken)
      return { success: true }

      // Uncomment below for actual API integration:
      // if (apiError) {
      //   return { success: false, error: apiError.message }
      // }
      // if (data) {
      //   authStore.login(data.user, data.token)
      //   return { success: true }
      // }
      // return { success: false, error: 'Registration failed' }
    } finally {
      isAuthLoading.value = false
    }
  }

  const initialize = () => {
    authStore.initializeAuth()
  }

  return {
    user: authStore.user,
    token: authStore.token,
    isAuthenticated: authStore.isAuthenticated,
    isAuthLoading,
    isApiLoading: isLoading,
    error,
    login,
    logout,
    register,
    initialize,
  }
}
