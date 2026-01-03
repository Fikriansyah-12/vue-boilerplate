<template>
  <div class="relative bg-white rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group">
    <!-- Gradient background accent -->
    <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-300"></div>
    
    <div class="relative p-6">
      <div class="flex items-start justify-between mb-6">
        <div>
          <p class="text-slate-600 text-xs font-semibold uppercase tracking-wider">{{ title }}</p>
          <p class="text-3xl font-bold text-slate-900 mt-2">{{ value }}</p>
        </div>
        <div :class="['p-3 rounded-lg transition-all', icon ? 'bg-gradient-to-br from-indigo-100 to-purple-100 group-hover:from-indigo-200 group-hover:to-purple-200' : 'bg-slate-100']">
          <iconify-icon :icon="icon" class="text-2xl text-indigo-600" />
        </div>
      </div>
      <div class="flex items-center gap-2">
        <div :class="['flex items-center gap-1.5 px-2.5 py-1 rounded-full', trendUp ? 'bg-green-50' : 'bg-red-50']">
          <iconify-icon
            :icon="trendUp ? 'mdi:trending-up' : 'mdi:trending-down'"
            :class="[trendUp ? 'text-green-600' : 'text-red-600', 'text-sm']"
          />
          <span :class="[trendUp ? 'text-green-600' : 'text-red-600', 'text-sm font-semibold']">
            {{ trend }}
          </span>
        </div>
        <span class="text-slate-500 text-sm">vs last month</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  value: string | number
  icon: string
  trend: string
  trendUp: boolean
}

defineProps<Props>()
</script>
