import styled from 'styled-components'
import ProgressiveImage from 'react-progressive-bg-image'

const Image = styled(ProgressiveImage).attrs({
  placeholder: '',
  blur: 1,
  opacity: 0.9,
})`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  &:hover {
    opacity: 0.7;
    transition: all 0.3s linear;
  }
`

export default Image
