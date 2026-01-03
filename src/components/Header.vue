<template>
  <header class="bg-white backdrop-blur-sm shadow-card border-b border-slate-200 sticky top-0 z-10">
    <div class="flex items-center justify-between px-6 py-5">
      <div>
        <h1 class="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">{{ title }}</h1>
        <p class="text-sm text-slate-500 mt-1">{{ subtitle }}</p>
      </div>

      <div class="flex items-center gap-4">
        <!-- Search -->
        <div class="hidden sm:flex items-center gap-2 bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 rounded-lg px-4 py-2.5 transition-all hover:border-slate-300">
          <iconify-icon icon="mdi:magnify" class="text-slate-400" />
          <input
            type="text"
            placeholder="Search anything..."
            class="bg-transparent text-sm placeholder-slate-400 focus:outline-none w-40"
          />
        </div>

        <!-- Notifications -->
        <button class="relative p-2.5 hover:bg-slate-100 rounded-lg transition-colors group">
          <iconify-icon icon="mdi:bell" class="text-lg text-slate-600 group-hover:text-slate-900" />
          <span class="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-gradient-to-br from-red-500 to-red-600 rounded-full animate-pulse"></span>
        </button>

        <!-- Language/Theme -->
        <button class="p-2.5 hover:bg-slate-100 rounded-lg transition-colors group">
          <iconify-icon icon="mdi:palette" class="text-lg text-slate-600 group-hover:text-slate-900" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Dashboard',
  subtitle: 'Welcome back',
})
</script>
