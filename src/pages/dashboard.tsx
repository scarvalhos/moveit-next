import Head from 'next/head'

import { GetServerSideProps } from 'next'
import { CompletedChallends } from '../components/CompletedChallends'
import { ExperienceBar } from '../components/ExperienceBar'
import { ChallengeBox } from '../components/ChallengeBox'
import { Countdown } from '../components/Countdown'
import { Profile } from '../components/Profile'

import { ChallengesProvider } from '../contexts/ChallengesContext'
import { CountdownProvider } from '../contexts/CountdownContext'

import styles from '../styles/pages/Home.module.css'

export type User = {
  avatar_url?: string
  bio?: string
  blog?: string
  company?: string
  created_at?: string
  email?: string
  events_url?: string
  followers?: number
  followers_url?: string
  following?: number
  following_url?: string
  gists_url?: string
  gravatar_id?: string
  hireable?: string
  html_url?: string
  id?: number
  location?: string
  login?: string
  name?: string
  node_id?: string
  organizations_url?: string
  public_gists?: number
  public_repos?: number
  received_events_url?: string
  repos_url?: string
  site_admin?: boolean
  starred_url?: string
  subscriptions_url?: string
  twitter_username?: string
  type?: string
  updated_at?: string
  url?: string
}

interface DashboardProps {
  level: number
  currentExperience: number
  challengesCompleted: number
  user: User
}

export default function Dashboard(props: DashboardProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | Move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile user={props.user} />
              <CompletedChallends />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (cxt) => {
  const { level, currentExperience, challengesCompleted, user } =
    cxt.req.cookies

  if (!user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      user: JSON.parse(user),
    },
  }
}
