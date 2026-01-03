import { ref } from 'vue'
import axios from 'axios'
import type { AxiosInstance, AxiosError, AxiosResponse } from 'axios'
import { API_BASE_URL, TOKEN_KEY } from '@/utils/constants'

interface UseApiOptions {
  baseURL?: string
  timeout?: number
}

class ApiClient {
  private instance: AxiosInstance

  constructor(options: UseApiOptions = {}) {
    this.instance = axios.create({
      baseURL: options.baseURL || API_BASE_URL,
      timeout: options.timeout || 10000,
    })

    // Add request interceptor for token
    this.instance.interceptors.request.use((config: any) => {
      const token = localStorage.getItem(TOKEN_KEY)
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    })

    // Add response interceptor for error handling
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => {
        // Handle 401 - redirect to login
        if (error.response?.status === 401) {
          localStorage.removeItem(TOKEN_KEY)
          window.location.href = '/login'
        }
        return Promise.reject(error)
      }
    )
  }

  async get<T>(url: string): Promise<T> {
    const response = await this.instance.get<T>(url)
    return response.data
  }

  async post<T>(url: string, data?: any): Promise<T> {
    const response = await this.instance.post<T>(url, data)
    return response.data
  }

  async put<T>(url: string, data?: any): Promise<T> {
    const response = await this.instance.put<T>(url, data)
    return response.data
  }

  async patch<T>(url: string, data?: any): Promise<T> {
    const response = await this.instance.patch<T>(url, data)
    return response.data
  }

  async delete<T>(url: string): Promise<T> {
    const response = await this.instance.delete<T>(url)
    return response.data
  }
}

export function useApi(options: UseApiOptions = {}) {
  const isLoading = ref(false)
  const error = ref<AxiosError | null>(null)
  const client = new ApiClient(options)

  const request = async <T>(
    method: 'get' | 'post' | 'put' | 'patch' | 'delete',
    url: string,
    data?: any
  ): Promise<{ data: T | null; error: AxiosError | null }> => {
    isLoading.value = true
    error.value = null

    try {
      let response: T
      if (method === 'get' || method === 'delete') {
        response = await client[method]<T>(url)
      } else {
        response = await client[method]<T>(url, data)
      }
      return { data: response, error: null }
    } catch (err) {
      const axiosError = err as AxiosError
      error.value = axiosError
      return { data: null, error: axiosError }
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    error,
    get: <T>(url: string) => request<T>('get', url),
    post: <T>(url: string, data?: any) => request<T>('post', url, data),
    put: <T>(url: string, data?: any) => request<T>('put', url, data),
    patch: <T>(url: string, data?: any) => request<T>('patch', url, data),
    delete: <T>(url: string) => request<T>('delete', url),
  }
}
