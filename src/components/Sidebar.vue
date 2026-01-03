<template>
  <aside
    :class="[
      'fixed left-0 top-0 h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white transition-all duration-300 shadow-xl',
      isOpen ? 'w-60' : 'w-20',
      'flex flex-col border-r border-slate-700'
    ]"
  >
    <!-- Logo Section -->
    <div class="flex items-center justify-between h-16 px-4 border-b border-slate-700/50 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 backdrop-blur">
      <div v-if="isOpen" class="flex items-center gap-3">
        <div class="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
          <iconify-icon icon="mdi:chart-box" class="text-xl text-white" />
        </div>
        <div>
          <span class="font-bold text-lg bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Dashboard</span>
        </div>
      </div>
      <button
        @click="toggleSidebar"
        class="p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
      >
        <iconify-icon :icon="isOpen ? 'mdi:chevron-left' : 'mdi:chevron-right'" class="text-xl" />
      </button>
    </div>

    <!-- Navigation Links -->
    <nav class="flex-1 overflow-y-auto px-3 py-6 space-y-1.5">
      <router-link
        v-for="item in menuItems"
        :key="item.path"
        :to="item.path"
        :class="[
          'flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group',
          isActive(item.path)
            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/20'
            : 'text-slate-300 hover:bg-slate-700/50'
        ]"
      >
        <iconify-icon :icon="item.icon" :class="['text-lg flex-shrink-0', isActive(item.path) ? 'text-white' : 'text-slate-400 group-hover:text-slate-300']" />
        <span v-if="isOpen" class="text-sm font-medium">{{ item.label }}</span>
      </router-link>
    </nav>

    <!-- User Section -->
    <div v-if="user" class="border-t border-slate-700/50 p-4 bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur">
      <button
        @click="showUserMenu = !showUserMenu"
        :class="[
          'w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-all',
          isOpen && 'justify-between'
        ]"
      >
        <div class="flex items-center gap-3 flex-1">
          <img
            v-if="user.avatar"
            :src="user.avatar"
            :alt="user.name"
            class="w-9 h-9 rounded-full object-cover ring-2 ring-indigo-500/30"
          />
          <div v-else class="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white ring-2 ring-indigo-500/30">
            {{ user.name.charAt(0).toUpperCase() }}
          </div>
          <div v-if="isOpen" class="text-left">
            <p class="text-sm font-medium">{{ user.name }}</p>
            <p class="text-xs text-slate-400">{{ user.role }}</p>
          </div>
        </div>
        <iconify-icon v-if="isOpen" icon="mdi:chevron-down" class="text-lg" />
      </button>

      <!-- User Menu Dropdown -->
      <Transition name="fade">
        <div v-if="showUserMenu && isOpen" class="mt-2 bg-slate-700/50 rounded-lg overflow-hidden border border-slate-600/50">
          <button
            @click="handleLogout"
            class="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-600/50 transition-colors text-left"
          >
            <iconify-icon icon="mdi:logout" class="text-lg" />
            <span class="text-sm">Logout</span>
          </button>
        </div>
      </Transition>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const route = useRoute()
const router = useRouter()
const { user, logout } = useAuth()

const isOpen = ref(true)
const showUserMenu = ref(false)

const menuItems = [
  { path: '/dashboard', icon: 'mdi:home', label: 'Dashboard' },
  { path: '/dashboard/users', icon: 'mdi:account-group', label: 'Users' },
  { path: '/dashboard/settings', icon: 'mdi:cog', label: 'Settings' },
  { path: '/dashboard/analytics', icon: 'mdi:chart-line', label: 'Analytics' },
]

const isActive = (path: string) => route.path === path

const toggleSidebar = () => {
  isOpen.value = !isOpen.value
}

const handleLogout = () => {
  logout()
  router.push('/login')
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
