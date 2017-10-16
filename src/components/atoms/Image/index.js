import styled from 'styled-components'
import ProgressiveImage from 'react-progressive-bg-image'

import { placeholder } from 'static/placeholder'

const Image = styled(ProgressiveImage).attrs({
  placeholder,
})`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`

export default Image
