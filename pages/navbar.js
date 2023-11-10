import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

export default function navbar() {
  return (
    <nav className = {`${styles.nnav}`}>
        <ul>
          <Link href="/home/"><li>Home</li></Link>
          <Link href="/blog"><li>Blog</li></Link>
          <Link href="/about"><li>About</li></Link>
          <Link href="/contact"><li>Contact</li></Link>
        </ul>
      </nav>
  )
}
