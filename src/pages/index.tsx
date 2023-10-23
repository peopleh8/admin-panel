import { FC } from 'react'
import Banner from '@/components/Banner/Banner'
import Controls from '@/components/Dashboard/Controls/Controls'
import styles from '@/styles/Dashboard.module.scss'
import Running from '@/components/Dashboard/Running/Running'
import Upcoming from '@/components/Dashboard/Upcoming/Upcoming'
import MetaData from '@/layout/Metadata'

const Dashboard: FC = () => {
  return (
    <div className={styles.dashboard}>
      <MetaData title='Dashboard' />
      <Banner />
      <Controls />
      <Running />
      <Upcoming />
    </div>
  )
}

export default Dashboard