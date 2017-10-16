import styled from 'styled-components'
import ProgressiveImage from 'react-progressive-bg-image'

const Image = styled(ProgressiveImage).attrs({
  placeholder: '',
  blur: 3,
  opacity: 0.8,
})`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`

export default Image
