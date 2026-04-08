import { api, apiDefault, apiDefaultUpload, apiUpload } from './axios'

//axios cho các api không cần truyền token
apiDefault.interceptors.response.use((response) => response.data)

export { api, apiDefault, apiDefaultUpload, apiUpload }