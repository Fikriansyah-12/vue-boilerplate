<template>
  <div class="space-y-6">
    <!-- Header -->
    <div>
      <h2 class="text-2xl font-bold text-slate-900">Analytics</h2>
      <p class="text-slate-600 mt-1">Track your business metrics and performance</p>
    </div>

    <!-- Date Range Selector -->
    <div class="bg-white rounded-lg shadow p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
      <div class="flex gap-2">
        <Button variant="outline" size="sm">Today</Button>
        <Button variant="outline" size="sm">This Week</Button>
        <Button variant="outline" size="sm">This Month</Button>
        <Button variant="outline" size="sm">This Year</Button>
      </div>
      <input type="date" class="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>

    <!-- Charts Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Revenue Chart -->
      <div class="bg-white rounded-lg shadow p-6">
        <h3 class="text-lg font-bold text-slate-900 mb-4">Revenue Trend</h3>
        <div class="h-72 bg-slate-50 rounded flex items-center justify-center text-slate-400">
          <p class="flex items-center gap-2">
            <iconify-icon icon="mdi:chart-line" class="text-2xl" />
            Chart placeholder
          </p>
        </div>
      </div>

      <!-- User Growth -->
      <div class="bg-white rounded-lg shadow p-6">
        <h3 class="text-lg font-bold text-slate-900 mb-4">User Growth</h3>
        <div class="h-72 bg-slate-50 rounded flex items-center justify-center text-slate-400">
          <p class="flex items-center gap-2">
            <iconify-icon icon="mdi:chart-bar" class="text-2xl" />
            Chart placeholder
          </p>
        </div>
      </div>

      <!-- Conversion Rate -->
      <div class="bg-white rounded-lg shadow p-6">
        <h3 class="text-lg font-bold text-slate-900 mb-4">Conversion Rate</h3>
        <div class="h-72 bg-slate-50 rounded flex items-center justify-center text-slate-400">
          <p class="flex items-center gap-2">
            <iconify-icon icon="mdi:percent" class="text-2xl" />
            Chart placeholder
          </p>
        </div>
      </div>

      <!-- Traffic Sources -->
      <div class="bg-white rounded-lg shadow p-6">
        <h3 class="text-lg font-bold text-slate-900 mb-4">Traffic Sources</h3>
        <div class="h-72 bg-slate-50 rounded flex items-center justify-center text-slate-400">
          <p class="flex items-center gap-2">
            <iconify-icon icon="mdi:map" class="text-2xl" />
            Chart placeholder
          </p>
        </div>
      </div>
    </div>

    <!-- Detailed Metrics -->
    <div class="bg-white rounded-lg shadow p-6">
      <h3 class="text-lg font-bold text-slate-900 mb-4">Top Pages</h3>
      <table class="w-full">
        <thead class="bg-slate-50 border-b border-slate-200">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase">Page</th>
            <th class="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase">Views</th>
            <th class="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase">Users</th>
            <th class="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase">Bounce Rate</th>
            <th class="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase">Avg Duration</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-200">
          <tr v-for="page in pages" :key="page.id" class="hover:bg-slate-50">
            <td class="px-6 py-4 font-medium text-slate-900">{{ page.name }}</td>
            <td class="px-6 py-4 text-slate-600">{{ page.views }}</td>
            <td class="px-6 py-4 text-slate-600">{{ page.users }}</td>
            <td class="px-6 py-4 text-slate-600">{{ page.bounceRate }}</td>
            <td class="px-6 py-4 text-slate-600">{{ page.duration }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue'

const pages = [
  { id: 1, name: '/dashboard', views: '3,456', users: '2,341', bounceRate: '25%', duration: '3m 45s' },
  { id: 2, name: '/users', views: '2,123', users: '1,847', bounceRate: '32%', duration: '2m 30s' },
  { id: 3, name: '/analytics', views: '1,892', users: '1,654', bounceRate: '28%', duration: '4m 12s' },
  { id: 4, name: '/settings', views: '987', users: '876', bounceRate: '45%', duration: '1m 45s' },
  { id: 5, name: '/help', views: '654', users: '543', bounceRate: '52%', duration: '1m 20s' },
]
</script>
