import * as React from 'react'
import styledComponents from 'styled-components'

const DefaultImage = require('../../assets/img/lindell_picture.jpg')

const Image = styledComponents.img`
  margin: 0;
  width: 100%;
  height: auto;
`

interface CardImageProps {
  src?: string
  alt?: string
}
const CardImage = (props: CardImageProps): JSX.Element => {
  return (
    <Image src={props.src || DefaultImage} alt={props.alt || 'Lindell Carter - tenor'} />
  )
}

export default CardImage
