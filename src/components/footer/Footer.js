import React from 'react'
import styles from "./Footer.module.scss"
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
  const date = new Date();
  const year = date.getFullYear()

const Footer = () => {
  return (
    <div className={styles.footer}>
      {<AiOutlineCopyrightCircle />} {year} All Rights Reserved
    </div>
  )
}

export default Footer