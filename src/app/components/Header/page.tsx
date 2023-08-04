import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span style={{alignContent: "flex-start"}}>
        <h2>Posts Lab</h2>
      </span>
      <span style={{alignContent: "flex-end"}}>
        <Link href={"/posts"}><h5>Posts</h5></Link>
      </span>
    </div>
  )
}