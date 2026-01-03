<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center p-4">
    <div class="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
      <!-- Header -->
      <div class="text-center mb-8">
        <iconify-icon icon="mdi:chart-box" class="text-5xl text-blue-600 justify-center flex" />
        <h1 class="text-3xl font-bold text-slate-900 mt-4">Create Account</h1>
        <p class="text-slate-500 mt-2">Join us today</p>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleRegister" class="space-y-4">
        <!-- Name -->
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
          <input
            v-model="form.name"
            type="text"
            placeholder="John Doe"
            class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
        </div>

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

        <!-- Confirm Password -->
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">Confirm Password</label>
          <input
            v-model="form.confirmPassword"
            type="password"
            placeholder="••••••••"
            class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p v-if="errors.confirmPassword" class="text-red-500 text-sm mt-1">{{ errors.confirmPassword }}</p>
        </div>

        <!-- Terms -->
        <label class="flex items-center gap-2 cursor-pointer">
          <input v-model="form.agreeTerms" type="checkbox" class="rounded" />
          <span class="text-sm text-slate-600">I agree to the <a href="#" class="text-blue-600 hover:text-blue-700">Terms of Service</a></span>
        </label>
        <p v-if="errors.agreeTerms" class="text-red-500 text-sm">{{ errors.agreeTerms }}</p>

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
          Create Account
        </Button>
      </form>

      <!-- Footer -->
      <p class="text-center text-slate-600 mt-6">
        Already have an account?
        <router-link to="/login" class="text-blue-600 hover:text-blue-700 font-medium">Sign in</router-link>
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
const { register } = useAuth()

const form = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeTerms: false
})

const errors = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeTerms: '',
  general: ''
})

const isLoading = ref(false)

const handleRegister = async () => {
  errors.name = ''
  errors.email = ''
  errors.password = ''
  errors.confirmPassword = ''
  errors.agreeTerms = ''
  errors.general = ''

  // Validation
  if (!form.name) {
    errors.name = 'Name is required'
    return
  }
  if (!form.email) {
    errors.email = 'Email is required'
    return
  }
  if (!form.password) {
    errors.password = 'Password is required'
    return
  }
  if (form.password !== form.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match'
    return
  }
  if (!form.agreeTerms) {
    errors.agreeTerms = 'You must agree to the terms'
    return
  }

  isLoading.value = true
  try {
    const { success } = await register(form)
    
    if (success) {
      router.push('/dashboard')
    } else {
      errors.general = 'Registration failed. Please try again.'
    }
  } catch (error) {
    errors.general = 'An error occurred. Please try again.'
  } finally {
    isLoading.value = false
  }
}
</script>
