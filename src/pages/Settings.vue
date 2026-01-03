<template>
  <div class="space-y-6">
    <!-- Header -->
    <div>
      <h2 class="text-2xl font-bold text-slate-900">Settings</h2>
      <p class="text-slate-600 mt-1">Manage your account and application settings</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Settings Menu -->
      <div class="lg:col-span-1">
        <div class="bg-white rounded-lg shadow overflow-hidden sticky top-24">
          <div class="p-4 border-b border-slate-200 bg-slate-50">
            <h3 class="font-bold text-slate-900">Settings</h3>
          </div>
          <nav class="divide-y divide-slate-200">
            <button
              v-for="item in settingsMenu"
              :key="item.id"
              @click="activeTab = item.id"
              :class="[
                'w-full text-left px-4 py-3 transition-colors flex items-center gap-3',
                activeTab === item.id ? 'bg-blue-50 border-l-4 border-blue-600 text-blue-600' : 'hover:bg-slate-50 text-slate-600'
              ]"
            >
              <iconify-icon :icon="item.icon" class="text-lg" />
              <span class="font-medium">{{ item.label }}</span>
            </button>
          </nav>
        </div>
      </div>

      <!-- Settings Content -->
      <div class="lg:col-span-2 space-y-6">
        <!-- Profile Settings -->
        <div v-if="activeTab === 'profile'" class="bg-white rounded-lg shadow p-6">
          <h3 class="text-lg font-bold text-slate-900 mb-4">Profile Settings</h3>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
              <input type="text" value="John Doe" class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2">Email</label>
              <input type="email" value="john@example.com" class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2">Bio</label>
              <textarea rows="4" class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about yourself..."></textarea>
            </div>
            <Button variant="primary">Save Changes</Button>
          </div>
        </div>

        <!-- Security Settings -->
        <div v-if="activeTab === 'security'" class="bg-white rounded-lg shadow p-6">
          <h3 class="text-lg font-bold text-slate-900 mb-4">Security Settings</h3>
          <div class="space-y-4">
            <div class="p-4 bg-slate-50 rounded-lg">
              <h4 class="font-medium text-slate-900 mb-2 flex items-center gap-2">
                <iconify-icon icon="mdi:lock" />
                Change Password
              </h4>
              <p class="text-slate-600 text-sm mb-4">Update your password regularly to keep your account secure</p>
              <div class="space-y-3">
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">Current Password</label>
                  <input type="password" class="w-full px-4 py-2 border border-slate-300 rounded-lg" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">New Password</label>
                  <input type="password" class="w-full px-4 py-2 border border-slate-300 rounded-lg" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">Confirm New Password</label>
                  <input type="password" class="w-full px-4 py-2 border border-slate-300 rounded-lg" />
                </div>
                <Button variant="primary">Update Password</Button>
              </div>
            </div>

            <div class="p-4 bg-slate-50 rounded-lg">
              <h4 class="font-medium text-slate-900 mb-2 flex items-center gap-2">
                <iconify-icon icon="mdi:shield-check" />
                Two-Factor Authentication
              </h4>
              <p class="text-slate-600 text-sm">Add an extra layer of security to your account</p>
              <Button variant="outline" size="sm" class="mt-3">Enable 2FA</Button>
            </div>
          </div>
        </div>

        <!-- Notification Settings -->
        <div v-if="activeTab === 'notifications'" class="bg-white rounded-lg shadow p-6">
          <h3 class="text-lg font-bold text-slate-900 mb-4">Notification Settings</h3>
          <div class="space-y-4">
            <label class="flex items-center justify-between p-4 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50">
              <div>
                <p class="font-medium text-slate-900">Email Notifications</p>
                <p class="text-sm text-slate-600">Receive updates via email</p>
              </div>
              <input type="checkbox" checked class="w-5 h-5" />
            </label>
            <label class="flex items-center justify-between p-4 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50">
              <div>
                <p class="font-medium text-slate-900">Push Notifications</p>
                <p class="text-sm text-slate-600">Get browser push notifications</p>
              </div>
              <input type="checkbox" checked class="w-5 h-5" />
            </label>
            <label class="flex items-center justify-between p-4 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50">
              <div>
                <p class="font-medium text-slate-900">SMS Notifications</p>
                <p class="text-sm text-slate-600">Receive alerts via SMS</p>
              </div>
              <input type="checkbox" class="w-5 h-5" />
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/Button.vue'

const activeTab = ref('profile')

const settingsMenu = [
  { id: 'profile', label: 'Profile', icon: 'mdi:account' },
  { id: 'security', label: 'Security', icon: 'mdi:lock' },
  { id: 'notifications', label: 'Notifications', icon: 'mdi:bell' },
]
</script>
