import styled from 'styled-components'
import logo from '../public/logos/gstc-logo.png'
import securityMenuBG from '../public/backgrounds/termsConditionsBackground.svg'
import closeIconGrey from '../public/icons/close.svg'
import closeIconWhite from '../public/icons/close_white.svg'

const Header = styled.header.attrs({
  className: 'w-full min-h-65',
})`
  display: grid;
  grid-template-rows: 1fr 4rem;
  align-items: center;
  min-height: ${cssTheme('spacing.65')};
  background: url(${securityMenuBG}) left top/cover no-repeat;
`

const H1 = styled.h1.attrs({
  className: 'text-center font-header font-thin mx-17',
})``

const GSTCLogo = styled.img.attrs({
  src: logo,
  alt: 'Guy&#39;s &amp; St Thomas&#39; Charity logo',
  className: 'mx-auto',
})`
  width: 4rem;
`

const CloseButton = styled.button.attrs({
  className: 'w-5 h-5 mt-6 mr-6 absolute top-0 right-0',
})`
  justify-self: end;
`

const Text = styled.p.attrs({
  className: 'm-4 font-xl font-thin',
})``

const Footer = styled.footer.attrs({
  className: 'bg-white shadow-tooltip rounded-card px-4 pb-10',
})``

const Grid = styled.section.attrs({
  className: ' py-5',
})`
  display: grid;
  grid-template-columns: 45px 1fr;
`

const Checkbox = styled.input.attrs({
  className: 'w-4',
})``

const Label = styled.label.attrs({
  className: 'font-sm',
})`
  align-self: center;
`

const Button = styled.button.attrs({
  className: 'bg-navy shadow-button rounded-button w-full text-white py-4',
})``

const Close = ({ close, closeColour }) => {
  return (
    <CloseButton onClick={close} onKeyPress={close}>
      <img
        src={closeColour === 'white' ? closeIconWhite : closeIconGrey}
        alt="Close"
      />
    </CloseButton>
  )
}

const HeaderWithGSTCLogo = ({ text, close, closeColour }) => {
  return (
    <Header>
      {close && <Close closeColour={closeColour} close={close} />}
      <H1>{text}</H1>
      <GSTCLogo />
    </Header>
  )
}

export {
  HeaderWithGSTCLogo,
  Button,
  Text,
  H1,
  Label,
  Grid,
  Checkbox,
  Footer,
  Close,
}
