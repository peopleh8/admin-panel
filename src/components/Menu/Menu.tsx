import { FC } from 'react'
import MenuItem from './MenuItem'
import ProfileItem from './ProfileItem'
import { useTypedDispatch } from '@/hooks/useTypedDispatch'
import { setLogoutModal } from '@/store/reducers/profileReducer'
import styles from '@/components/Menu/Menu.module.scss'

const Menu: FC = () => {
  const dispatch = useTypedDispatch()

  const openLogOutModalHandler = () => {
    dispatch(setLogoutModal(true))
  }
  
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        <MenuItem link='/' name='Dashboard' icon='/assets/icons/dashboard.svg' />
        <MenuItem link='/events' name='Events' icon='/assets/icons/events.svg' />
        <MenuItem link='/analytics' name='Analytics' icon='/assets/icons/analitics.svg' />
        <MenuItem link='/loyalty' name='Loyalty' icon='/assets/icons/loyalty.svg' />
        <MenuItem link='/notifications' name='Notifications' icon='/assets/icons/notifications.svg' />
        <MenuItem link='/messages' name='Messages' icon='/assets/icons/messages.svg' />
      </ul>
      <ProfileItem />
      <MenuItem 
        name='Logout' 
        icon='/assets/icons/logout.svg'
        handleClick={openLogOutModalHandler}
      />
    </nav>
  )
}

export default Menu