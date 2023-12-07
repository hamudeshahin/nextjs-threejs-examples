import React from 'react'

import BasicExample from '@/components/basic-example'
import AddRemoveCubesExample from '@/components/add-remove-cubes-with-name-objects'

const EXAMPLES = {
  basic: BasicExample,
  'add-remove-cubes-with-name-objects': AddRemoveCubesExample,
  'not-found': () => <h2>Not Found!</h2>,
}

type Type = typeof EXAMPLES
type SlugType = keyof Type

const ExamplesPage = ({ params }: { params: { slug: SlugType } }) => {
  const CurrentExample = EXAMPLES[params.slug] ?? EXAMPLES['not-found']
  return <CurrentExample />
}

export default ExamplesPage
