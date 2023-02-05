import { ChallengesContext } from '../contexts/ChallengesContext'
import { useContext } from 'react'
import { User } from '../pages/dashboard'

import styles from '../styles/components/Profile.module.css'

interface ProfileProps {
  user: User
}

export const Profile: React.FC<ProfileProps> = ({ user }) => {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src={user?.avatar_url} alt={user?.name} />
      <div>
        <strong>{user?.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}
