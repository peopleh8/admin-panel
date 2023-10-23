import { FC } from 'react'
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle'
import CreateEventNewForm from '@/components/CreateEvent/CreateEventNewForm'
import styles from '@/components/CreateEvent/CreateEvent.module.scss'

const CreateEventNew: FC = () => {
  return (
    <div className={styles.createNew}>
      <SectionTitle leavel={3}>Create New Event</SectionTitle>
      <CreateEventNewForm />
    </div>
  )
}

export default CreateEventNew