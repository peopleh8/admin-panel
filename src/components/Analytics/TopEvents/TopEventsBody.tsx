import { FC } from 'react'
import SimpleBar from 'simplebar-react'
import TopEventsItem from '@/components/Analytics/TopEvents/TopEventsItem'
import styles from '@/components/Analytics/TopEvents/TopEvents.module.scss'
import 'simplebar-react/dist/simplebar.min.css'

const TopEventsBody: FC = () => {
  return (
    <SimpleBar
      className={styles.body}
      autoHide={false}
    >
      <TopEventsItem />
      <TopEventsItem />
      <TopEventsItem />
      <TopEventsItem />
      <TopEventsItem />
      <TopEventsItem />
      <TopEventsItem />
      <TopEventsItem />
      <TopEventsItem />
      <TopEventsItem />
      <TopEventsItem />
      <TopEventsItem />
      <TopEventsItem />
    </SimpleBar>
  )
}

export default TopEventsBody