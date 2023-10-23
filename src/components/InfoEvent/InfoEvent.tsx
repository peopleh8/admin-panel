import { FC } from 'react'
import InfoEventPreview from '@/components/InfoEvent/InfoEventPreview'
import InfoEventToolbar from '@/components/InfoEvent/InfoEventToolbar'
import InfoEventText from '@/components/InfoEvent/InfoEventText'
import styles from '@/components/InfoEvent/InfoEvent.module.scss'

const InfoEvent: FC = () => {
  return (
    <div className={styles.info}>
      <InfoEventPreview />
      <InfoEventToolbar />
      <InfoEventText />
    </div>
  )
}

export default InfoEvent