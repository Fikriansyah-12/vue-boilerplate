<template>
  <div class="space-y-6">
    <!-- Welcome Card -->
    <div class="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white p-8 shadow-lg">
      <h2 class="text-3xl font-bold mb-2">Welcome back, {{ user?.name }}! 👋</h2>
      <p class="text-blue-100">Here's what's happening with your business today.</p>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Total Users"
        value="1,234"
        icon="mdi:account-group"
        trend="+12%"
        :trend-up="true"
      />
      <StatCard
        title="Revenue"
        value="$45,231"
        icon="mdi:currency-usd"
        trend="+8%"
        :trend-up="true"
      />
      <StatCard
        title="Orders"
        value="456"
        icon="mdi:shopping-cart"
        trend="-2%"
        :trend-up="false"
      />
      <StatCard
        title="Growth"
        value="24%"
        icon="mdi:chart-line"
        trend="+5%"
        :trend-up="true"
      />
    </div>

    <!-- Charts Section -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Main Chart -->
      <div class="lg:col-span-2 bg-white rounded-lg shadow p-6">
        <h3 class="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <iconify-icon icon="mdi:chart-line" class="text-blue-600" />
          Revenue Overview
        </h3>
        <div class="h-72 bg-slate-50 rounded flex items-center justify-center text-slate-400">
          <p class="flex items-center gap-2">
            <iconify-icon icon="mdi:chart-box" class="text-2xl" />
            Chart placeholder - Connect your data source
          </p>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="bg-white rounded-lg shadow p-6">
        <h3 class="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <iconify-icon icon="mdi:bell" class="text-blue-600" />
          Activity
        </h3>
        <div class="space-y-4">
          <div class="flex items-start gap-3 pb-4 border-b border-slate-200">
            <iconify-icon icon="mdi:check-circle" class="text-green-500 text-xl flex-shrink-0 mt-1" />
            <div>
              <p class="text-sm font-medium text-slate-900">Order completed</p>
              <p class="text-xs text-slate-500">2 hours ago</p>
            </div>
          </div>
          <div class="flex items-start gap-3 pb-4 border-b border-slate-200">
            <iconify-icon icon="mdi:account-plus" class="text-blue-500 text-xl flex-shrink-0 mt-1" />
            <div>
              <p class="text-sm font-medium text-slate-900">New user joined</p>
              <p class="text-xs text-slate-500">4 hours ago</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <iconify-icon icon="mdi:alert-circle" class="text-amber-500 text-xl flex-shrink-0 mt-1" />
            <div>
              <p class="text-sm font-medium text-slate-900">System update</p>
              <p class="text-xs text-slate-500">1 day ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="bg-white rounded-lg shadow p-6">
      <h3 class="text-lg font-bold text-slate-900 mb-4">Quick Actions</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Button variant="outline" size="lg" class="w-full flex flex-col items-center gap-2">
          <iconify-icon icon="mdi:plus" class="text-2xl" />
          <span class="text-sm">Add User</span>
        </Button>
        <Button variant="outline" size="lg" class="w-full flex flex-col items-center gap-2">
          <iconify-icon icon="mdi:download" class="text-2xl" />
          <span class="text-sm">Download</span>
        </Button>
        <Button variant="outline" size="lg" class="w-full flex flex-col items-center gap-2">
          <iconify-icon icon="mdi:file-export" class="text-2xl" />
          <span class="text-sm">Export</span>
        </Button>
        <Button variant="outline" size="lg" class="w-full flex flex-col items-center gap-2">
          <iconify-icon icon="mdi:cog" class="text-2xl" />
          <span class="text-sm">Settings</span>
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'
import Button from '@/components/Button.vue'
import StatCard from '@/components/StatCard.vue'

const { user } = useAuth()
</script>
