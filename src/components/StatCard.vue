<template>
  <div class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
    <div class="flex items-start justify-between mb-4">
      <div>
        <p class="text-slate-600 text-sm font-medium">{{ title }}</p>
        <p class="text-2xl font-bold text-slate-900 mt-2">{{ value }}</p>
      </div>
      <div :class="['p-3 rounded-lg', icon ? 'bg-blue-100' : 'bg-slate-100']">
        <iconify-icon :icon="icon" class="text-2xl text-blue-600" />
      </div>
    </div>
    <div class="flex items-center gap-2">
      <iconify-icon
        :icon="trendUp ? 'mdi:trending-up' : 'mdi:trending-down'"
        :class="[trendUp ? 'text-green-600' : 'text-red-600', 'text-lg']"
      />
      <span :class="[trendUp ? 'text-green-600' : 'text-red-600', 'text-sm font-medium']">
        {{ trend }}
      </span>
      <span class="text-slate-500 text-sm">vs last month</span>
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
