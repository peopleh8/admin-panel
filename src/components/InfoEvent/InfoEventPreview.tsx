import { FC } from 'react'
import Image from 'next/image'
import styles from '@/components/InfoEvent/InfoEvent.module.scss'

const InfoEventPreview: FC = () => {
  return (
    <div className={styles.preview}>
      <Image
        src='/assets/images/info-event.png'
        width={662}
        height={362}
        loading='lazy'
        alt='Logo'
      />
      <div className={styles.content}>
        <div className={styles.title}>Port Du Soleil</div>
        <div className={styles.date}>26 September</div>
      </div>
    </div>
  )
}

export default InfoEventPreview