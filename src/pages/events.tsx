import { FC } from 'react'
import Controls from '@/components/Events/Controls/Controls'
import EventsCalendar from '@/components/Events/EventsCalendar/EventsCalendar'
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle'
import styles from '@/styles/Events.module.scss'
import MetaData from '@/layout/Metadata'

const Events: FC = () => {  
  return (
    <div className={styles.events}>
      <MetaData title='Events' />
      <SectionTitle leavel={1}>Calender</SectionTitle>
      <div className={styles.inner}>
        <Controls />
        <EventsCalendar />
      </div>
    </div>
  )
}

export default Events