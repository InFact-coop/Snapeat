import styled from 'styled-components'

import bugIcon from '../public/icons/bug_icon.svg'

const BugButton = () => {
  return (
    <a
      href="https://airtable.com/shrA8ckDkLTVqLoab"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon src={bugIcon} alt="Report a bug" />
    </a>
  )
}

const Icon = styled.img.attrs({
  className: 'absolute w-10',
})`
  top: 2%;
  right: 20%;
`

export default BugButton
