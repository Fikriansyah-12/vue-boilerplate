<template>
  <div class="flex h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main Content -->
    <main :class="['flex-1 flex flex-col transition-all duration-300', { 'ml-20': !sidebarOpen, 'ml-60': sidebarOpen }]">
      <!-- Header -->
      <Header :title="title" :subtitle="subtitle" />

      <!-- Page Content -->
      <div class="flex-1 overflow-auto">
        <div class="p-6">
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'

interface Props {
  title?: string
  subtitle?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Dashboard',
  subtitle: 'Welcome to your dashboard',
})

const sidebarOpen = ref(true)
</script>
