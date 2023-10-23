import { FC } from 'react'
import { useRouter } from 'next/router'
import { useTypedDispatch } from '@/hooks/useTypedDispatch'
import { setLogoutModal, setAuth } from '@/store/reducers/profileReducer'
import LogoutBtns from '@/components/Logout/LogoutBtns'
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle'
import styles from '@/components/Logout/Logout.module.scss'


const Logout: FC = () => {
  const dispatch = useTypedDispatch()
  const router = useRouter()

  const positiveHandle = () => {
    router.push('/login/').then(() => {
      dispatch(setLogoutModal(false))
      dispatch(setAuth(false))
    })
  }

  const negativeHandle = () => {
    dispatch(setLogoutModal(false))
  }

  return (
    <div className={styles.logout}>
      <SectionTitle leavel={3}>Are you sure you want to logout?</SectionTitle>
      <LogoutBtns positiveHandle={positiveHandle} negativeHandle={negativeHandle} />
    </div>
  )
}

export default Logout