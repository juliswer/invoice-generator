import { useSelector, type TypedUseSelectorHook } from 'react-redux'
import type { RootState } from '@/redux/store/store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
