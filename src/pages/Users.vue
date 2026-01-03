<template>
  <div class="space-y-6">
    <!-- Header with Action Button -->
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-2xl font-bold text-slate-900">Users Management</h2>
        <p class="text-slate-600 mt-1">Manage and view all system users</p>
      </div>
      <Button variant="primary" icon="mdi:plus">Add New User</Button>
    </div>

    <!-- Filters and Search -->
    <div class="bg-white rounded-lg shadow p-4 flex flex-col md:flex-row gap-4">
      <div class="flex-1 flex items-center gap-2 bg-slate-100 rounded-lg px-3 py-2">
        <iconify-icon icon="mdi:magnify" class="text-slate-400" />
        <input
          type="text"
          placeholder="Search users..."
          class="bg-transparent flex-1 text-sm placeholder-slate-400 focus:outline-none"
        />
      </div>
      <select class="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>All Roles</option>
        <option>Admin</option>
        <option>User</option>
        <option>Moderator</option>
      </select>
      <select class="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>All Status</option>
        <option>Active</option>
        <option>Inactive</option>
      </select>
    </div>

    <!-- Users Table -->
    <div class="bg-white rounded-lg shadow overflow-hidden">
      <table class="w-full">
        <thead class="bg-slate-50 border-b border-slate-200">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase">Name</th>
            <th class="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase">Email</th>
            <th class="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase">Role</th>
            <th class="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase">Status</th>
            <th class="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase">Joined</th>
            <th class="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-200">
          <tr v-for="user in users" :key="user.id" class="hover:bg-slate-50 transition-colors">
            <td class="px-6 py-4">
              <div class="flex items-center gap-3">
                <img :src="user.avatar" :alt="user.name" class="w-8 h-8 rounded-full object-cover" />
                <span class="font-medium text-slate-900">{{ user.name }}</span>
              </div>
            </td>
            <td class="px-6 py-4 text-slate-600">{{ user.email }}</td>
            <td class="px-6 py-4">
              <span :class="[
                'px-3 py-1 rounded-full text-xs font-semibold',
                user.role === 'admin' ? 'bg-blue-100 text-blue-700' : user.role === 'moderator' ? 'bg-purple-100 text-purple-700' : 'bg-slate-100 text-slate-700'
              ]">
                {{ user.role }}
              </span>
            </td>
            <td class="px-6 py-4">
              <span :class="[
                'inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium',
                user.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              ]">
                <span class="w-2 h-2 rounded-full" :class="user.status === 'active' ? 'bg-green-600' : 'bg-red-600'"></span>
                {{ user.status }}
              </span>
            </td>
            <td class="px-6 py-4 text-slate-600 text-sm">{{ user.joined }}</td>
            <td class="px-6 py-4">
              <button class="p-2 hover:bg-slate-200 rounded-lg transition-colors">
                <iconify-icon icon="mdi:dots-vertical" class="text-slate-600" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div class="flex items-center justify-between">
      <p class="text-sm text-slate-600">Showing 1 to 10 of 45 results</p>
      <div class="flex gap-2">
        <Button variant="outline" size="sm">Previous</Button>
        <Button variant="outline" size="sm">Next</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue'

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin', status: 'active', joined: '2024-01-15', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=john' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user', status: 'active', joined: '2024-01-20', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=jane' },
  { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'moderator', status: 'active', joined: '2024-02-01', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=bob' },
  { id: 4, name: 'Alice Johnson', email: 'alice@example.com', role: 'user', status: 'inactive', joined: '2024-02-10', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alice' },
  { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'user', status: 'active', joined: '2024-02-15', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=charlie' },
]
</script>
