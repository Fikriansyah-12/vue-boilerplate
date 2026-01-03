<template>
  <header class="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-10">
    <div class="flex items-center justify-between px-6 py-4">
      <div>
        <h1 class="text-2xl font-bold text-slate-900">{{ title }}</h1>
        <p class="text-sm text-slate-500 mt-1">{{ subtitle }}</p>
      </div>

      <div class="flex items-center gap-4">
        <!-- Search -->
        <div class="hidden sm:flex items-center gap-2 bg-slate-100 rounded-lg px-3 py-2">
          <iconify-icon icon="mdi:magnify" class="text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            class="bg-transparent text-sm placeholder-slate-400 focus:outline-none"
          />
        </div>

        <!-- Notifications -->
        <button class="relative p-2 hover:bg-slate-100 rounded-lg transition-colors">
          <iconify-icon icon="mdi:bell" class="text-xl text-slate-600" />
          <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <!-- Language/Theme -->
        <button class="p-2 hover:bg-slate-100 rounded-lg transition-colors">
          <iconify-icon icon="mdi:palette" class="text-xl text-slate-600" />
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
