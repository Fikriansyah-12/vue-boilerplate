<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center p-4">
    <div class="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
      <!-- Header -->
      <div class="text-center mb-8">
        <iconify-icon icon="mdi:chart-box" class="text-5xl text-blue-600 justify-center flex" />
        <h1 class="text-3xl font-bold text-slate-900 mt-4">Dashboard</h1>
        <p class="text-slate-500 mt-2">Sign in to your account</p>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleLogin" class="space-y-4">
        <!-- Email -->
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">Email</label>
          <input
            v-model="form.email"
            type="email"
            placeholder="your@email.com"
            class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
        </div>

        <!-- Password -->
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">Password</label>
          <input
            v-model="form.password"
            type="password"
            placeholder="••••••••"
            class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p v-if="errors.password" class="text-red-500 text-sm mt-1">{{ errors.password }}</p>
        </div>

        <!-- Remember & Forgot -->
        <div class="flex items-center justify-between text-sm">
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" class="rounded" />
            <span class="text-slate-600">Remember me</span>
          </label>
          <a href="#" class="text-blue-600 hover:text-blue-700 font-medium">Forgot password?</a>
        </div>

        <!-- Error Message -->
        <div v-if="errors.general" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {{ errors.general }}
        </div>

        <!-- Submit Button -->
        <Button
          type="submit"
          variant="primary"
          size="lg"
          class="w-full"
          :is-loading="isLoading"
        >
          Sign In
        </Button>
      </form>

      <!-- Divider -->
      <div class="relative my-6">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-slate-300"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-2 bg-white text-slate-500">Or continue with</span>
        </div>
      </div>

      <!-- Social Login -->
      <div class="grid grid-cols-2 gap-3 mb-6">
        <button type="button" class="flex items-center justify-center gap-2 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
          <iconify-icon icon="mdi:google" class="text-xl text-red-500" />
          <span class="text-sm font-medium">Google</span>
        </button>
        <button type="button" class="flex items-center justify-center gap-2 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
          <iconify-icon icon="mdi:github" class="text-xl text-slate-900" />
          <span class="text-sm font-medium">GitHub</span>
        </button>
      </div>

      <!-- Footer -->
      <p class="text-center text-slate-600">
        Don't have an account?
        <router-link to="/register" class="text-blue-600 hover:text-blue-700 font-medium">Sign up</router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import Button from '@/components/Button.vue'

const router = useRouter()
const { login } = useAuth()

const form = reactive({
  email: 'admin@example.com',
  password: 'password123'
})

const errors = reactive({
  email: '',
  password: '',
  general: ''
})

const isLoading = ref(false)

const handleLogin = async () => {
  errors.email = ''
  errors.password = ''
  errors.general = ''

  // Validation
  if (!form.email) {
    errors.email = 'Email is required'
    return
  }
  if (!form.password) {
    errors.password = 'Password is required'
    return
  }

  isLoading.value = true
  try {
    // Demo: Simulate successful login
    const { success } = await login({ email: form.email, password: form.password })
    
    if (success) {
      router.push('/dashboard')
    } else {
      errors.general = 'Invalid email or password'
    }
  } catch (error) {
    errors.general = 'An error occurred. Please try again.'
  } finally {
    isLoading.value = false
  }
}
</script>
