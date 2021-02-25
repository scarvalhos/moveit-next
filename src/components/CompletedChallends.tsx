import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedChallends.module.css';

export function CompletedChallends() {
    const { challengesCompleted } = useContext(ChallengesContext);

    return (
        <div className={styles.completedChallendsContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}