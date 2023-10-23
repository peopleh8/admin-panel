import { FC } from 'react'
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle'
import GreetBtns from '@/components/Greet/GreetBtns'
import styles from '@/components/Greet/Greet.module.scss'

const Greet: FC<any> = () => {  
  return (
    <div className={styles.greet}>
      <div className={styles.inner}>
        <SectionTitle leavel={2}>Hello <br /> <span>Trädgår'n</span></SectionTitle>
        <SectionTitle leavel={3}>Lets begin creating events like never before</SectionTitle>
        <GreetBtns />
      </div>
    </div>
  )
}

export default Greet