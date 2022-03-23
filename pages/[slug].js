import React from 'react'
import { useRouter } from 'next/router'

const [slug] = () => {
    let slug=useRouter();
  return (
    <div>
        <p>the site is {slug}</p>
    </div>
  )
}

export default [slug]