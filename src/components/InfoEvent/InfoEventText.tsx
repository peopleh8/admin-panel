import { FC } from 'react'
import styles from '@/components/InfoEvent/InfoEvent.module.scss'

const InfoEventText: FC = () => {
  return (
    <p className={styles.text}>
      An event description is a text or copy that tells audiences all the essential details about your event. These details should come together so that it compels potential attendees to register. But more than driving up attendance, a good event description can pique the interest of non-members and even the press.
    </p>
  )
}

export default InfoEventText