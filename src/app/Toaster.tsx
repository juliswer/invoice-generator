import { ToastContainer } from 'react-toastify'

export const Toaster = () => {
  return (
    <ToastContainer
      autoClose={5000}
      newestOnTop
      pauseOnHover={false}
      position="top-right"
    />
  )
}
