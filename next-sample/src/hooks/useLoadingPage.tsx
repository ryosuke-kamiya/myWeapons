import { useContext } from 'react'
import { LoadingType } from '~/models'
import { LoadingPageContext } from '~/contexts'

export const useLoadingPage = (): LoadingType => {
	const { loadingPage, setLoadingPage } = useContext(LoadingPageContext)
	return { loadingPage, setLoadingPage }
}
