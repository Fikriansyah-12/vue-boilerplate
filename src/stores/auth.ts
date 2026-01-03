import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { User } from '@/types'
import { TOKEN_KEY, USER_KEY } from '@/utils/constants'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const token = ref<string | null>(null)

  // Initialize from localStorage
  const initializeAuth = () => {
    const storedToken = localStorage.getItem(TOKEN_KEY)
    const storedUser = localStorage.getItem(USER_KEY)
    
    if (storedToken) {
      token.value = storedToken
    }
    if (storedUser) {
      user.value = JSON.parse(storedUser)
    }
  }

  const isAuthenticated = computed(() => !!token.value && !!user.value)

  const login = (userData: User, authToken: string) => {
    user.value = userData
    token.value = authToken
    localStorage.setItem(TOKEN_KEY, authToken)
    localStorage.setItem(USER_KEY, JSON.stringify(userData))
  }

  const logout = () => {
    user.value = null
    token.value = null
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
  }

  const updateUser = (userData: Partial<User>) => {
    if (user.value) {
      user.value = { ...user.value, ...userData }
      localStorage.setItem(USER_KEY, JSON.stringify(user.value))
    }
  }

  return {
    user,
    token,
    isAuthenticated,
    initializeAuth,
    login,
    logout,
    updateUser,
  }
})
