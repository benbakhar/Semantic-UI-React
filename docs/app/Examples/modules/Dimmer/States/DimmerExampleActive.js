import React from 'react'
import { Dimmer, Image, Segment } from 'semantic-ui-react'

const DimmerExampleActive = () => (
  <Segment>
    <Dimmer active />

    <p>
      <Image src='/assets/images/wireframe/short-paragraph.png' />
    </p>
    <p>
      <Image src='/assets/images/wireframe/short-paragraph.png' />
    </p>
  </Segment>
)

export default DimmerExampleActive
