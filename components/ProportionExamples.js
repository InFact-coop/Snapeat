import styled from 'styled-components'
import * as R from 'ramda'

import Quarter from '../public/images/example_quarter.png'
import Half from '../public/images/example_half.png'
import Mostly from '../public/images/example_mostly.png'
import Whole from '../public/images/example_whole.png'
import closeIcon from '../public/icons/close.svg'

import { CardBackground } from './foodData/shared'

const proportionArray = [
  {
    name: 'Quarter',
    img: Quarter,
  },
  {
    name: 'Half',
    img: Half,
  },
  {
    name: 'Mostly',
    img: Mostly,
  },
  {
    name: 'Whole',
    img: Whole,
  },
]

const ProportionExamples = ({ toggleExamples }) => {
  return (
    <CardBackground>
      <CloseButton onClick={toggleExamples}>
        <img src={closeIcon} alt="Close" />
      </CloseButton>
      <p className="w-11/12 mx-auto font-xl text-center mb-5 mt-4">
        It can be hard to know how much fruit or veg there is on a plate. Here
        are some examples to help.
      </p>

      <ExampleContainer>
        {R.map(prop => (
          <Example key="prop">
            <img src={prop.img} alt={`Example of a ${prop.name} serving`} />
            <Text>{prop.name}</Text>
          </Example>
        ))(proportionArray)}
      </ExampleContainer>

      <p className="w-9/12 font-base font-bold mx-auto text-center mb-5 mt-5">
        If you&apos;re still not sure, just share your best guess!
      </p>
    </CardBackground>
  )
}

const CloseButton = styled.button.attrs({
  className: 'cursor-pointer block',
})`
  margin: 2rem 2rem 1rem auto;
`

const Text = styled.p.attrs({
  className: 'w-11/12 mx-auto font-xl text-center mb-3 mt-3',
})``

const ExampleContainer = styled.section.attrs({
  className: 'w-9/12 mx-auto',
})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 1rem;
`

const Example = styled.section.attrs({
  className: 'flex flex-col',
})``

export default ProportionExamples
