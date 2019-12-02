import React from 'react'
import styled from 'styled-components'

import { useRouteDispatch } from '../context/routeContext'
import { HOME, CHANGE_VIEW } from '../utils/constants'

import menuBG from '../public/backgrounds/termsConditionsBackground.svg'
import tcBG from '../public/backgrounds/t&c_card.svg'
import logo from '../public/logos/gstc-logo.png'

const Privacy = () => {
  const routeDispatch = useRouteDispatch()
  return (
    <div>
      <Header>
        <H1>
          T&C & <span className="block">Privacy</span>
        </H1>
        <Logo />
      </Header>

      <Text>
        Snapeat is owned and managed by Guys & St Thomas&#39; Charitable Trust.
      </Text>
      <br />
      <Text>
        Everything you share on Snapeat will be stored safely and your personal
        data will always be private. Read our Plain English Privacy Policy{' '}
        <a href="http://www.google.com">here</a>.
      </Text>

      <Text>
        If you are still happy to take part in the Snapeat Project please read
        our Terms and Conditions and, if you agree with them, click &#39;I
        Agree&#39; so that your family can take part.
      </Text>

      <Footer>
        <Grid>
          <Checkbox type="checkbox" id="termsConditions" />
          <Label htmlFor="termsConditions">
            I have read and agree to the terms and conditions and the privacy
            policy.
          </Label>
          <AgreeBtn
            onClick={() => routeDispatch({ type: CHANGE_VIEW, view: HOME })}
          >
            I Agree
          </AgreeBtn>
        </Grid>
      </Footer>
    </div>
  )
}

const Header = styled.header.attrs({
  className: 'w-full',
})`
  background: url(${menuBG}) left top/cover no-repeat;
`

const H1 = styled.h1.attrs({
  className: 'text-center font-header font-thin pt-12 pb-8',
})``

const Logo = styled.img.attrs({
  src: logo,
  alt: 'Guy&#39;s &amp; St Thomas&#39; Charity logo',
  className: 'mx-auto',
})`
  width: 4rem;
`

const Text = styled.p.attrs({
  className: 'm-4 font-xl font-thin',
})`
  font-size: 1.35rem;
`

const Footer = styled.footer.attrs({
  className: '',
})`
  background: url(${tcBG}) left top/cover no-repeat;
`

const Grid = styled.section.attrs({})`
  display: grid;
  grid-template-columns: 1rem 1fr 4fr 1rem;
  grid-template-rows: 1.5rem 2.5rem 2.5rem 1.5rem;
  grid-row-gap: 1rem;
`

const Checkbox = styled.input.attrs({})`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`

const Label = styled.label.attrs({
  className: 'font-sm',
})`
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  align-self: center;
`

const AgreeBtn = styled.button.attrs({
  className: 'block w-11/12 text-white',
})`
  grid-column: 2 / 4;
  grid-row: 3 / 4;
  background-color: ${cssTheme('colors.navy')};
  margin: 0 auto;
  border-radius: 25px;
  box-shadow: ${cssTheme('boxShadow.button')};
`

export default Privacy

// const x = styled.x.attrs({
//   className: '',
// })``
