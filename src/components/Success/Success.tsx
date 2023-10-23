import { FC } from 'react'
import Logo from '@/components/Logo/Logo'
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle'
import styles from '@/components/Success/Success.module.scss'

const Success: FC = () => {
  return (
    <div className={styles.success}>
      <Logo />
      <SectionTitle leavel={3}>Are you sure you want to logout?</SectionTitle>
    </div>
  )
}

export default Success