import Link from 'next/link'
import React from 'react'

const ExamplesPage = () => {
  return (
    <div className="max-w-2xl mx-auto my-20">
      <h2 className="font-bold">Examples</h2>
      <div className="my-5 h-[2px] w-full bg-gradient-to-tr from-red-400 to-black" />
      <ul>
        <li>
          <Link href={'/examples/basic'}>Basic</Link>
        </li>
        <li>
          <Link href={'/examples/multiple-cubs'}>Multiple Cubes</Link>
        </li>
        <li>
          <Link href={'/examples/add-remove-cubes-with-name-objects'}>Add remove cubes with name objects</Link>
        </li>
      </ul>
    </div>
  )
}

export default ExamplesPage
