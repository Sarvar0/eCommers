import React from 'react'
import styles from './Card.module.scss'
const Card = ({children, CardClass}) => {
  return (
    <div className={`${styles.card}  ${CardClass}`}>
      {children}
    </div>
  )
}

export default Card