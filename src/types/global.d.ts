 export {}

declare global {
  interface Window {
    showToast: (options: {
      message: string
       variant?: "success" | "warning" | "danger" | "info" | "loading" | "default"
    }) => void
   }
 }
