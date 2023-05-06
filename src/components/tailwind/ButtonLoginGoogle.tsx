import { signUp } from '@/redux/features/auth/actions/signUp/signUp'
import { useAppDispatch } from '@/redux/store/hooks/useAppDispatch'
import { useAppSelector } from '@/redux/store/hooks/useAppSelector'
import { openToastError } from '@/redux/store/ui/ui.slice'
import { useGoogleLogin } from '@react-oauth/google'
import { FaGoogle } from 'react-icons/fa'
import { Button } from '@components/common/Button'
import { SpinnerContainer } from '@components/common/SpinnerContainer'

export function ButtonLoginGoogle() {
  const { isLoading } = useAppSelector((state) => state.auth)
  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      void dispatch(signUp(tokenResponse.access_token))
    },
    onError: (errorResponse) => {
      if (errorResponse.error_description)
        dispatch(openToastError(errorResponse.error_description))
    }
  })

  const dispatch = useAppDispatch()

  return (
    <SpinnerContainer isLoading={isLoading}>
      <Button
        aria-label="Close"
        color="primary"
        extra="relative flex w-full justify-center rounded-md bg-[#fe445e] border-none"
        onClick={googleLogin}
        size=""
        type="submit"
      >
        <h5 className="text-5x1">Access with Google</h5>
        <FaGoogle />
      </Button>
    </SpinnerContainer>
  )
}
