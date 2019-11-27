import styled from 'styled-components'

import quarterPic from '../public/images/example_quarter.png'
import halfPic from '../public/images/example_half.png'
import mostlyPic from '../public/images/example_mostly.png'
import wholePic from '../public/images/example_whole.png'
import closeIcon from '../public/icons/close.svg'

import { CardBackground } from './foodData/shared'

const ProportionExamples = ({ toggleExamples }) => {
  return (
    <CardBackground>
      <CloseButton onClick={toggleExamples}>
        <img src={closeIcon} alt="Close" />
      </CloseButton>
      <p className="w-11/12 mx-auto font-xl text-center mb-5 mt-8">
        It can be hard to know how much fruit or veg there is on a plate. Here
        are some examples to help.
      </p>

      <ExampleContainer>
        <Example>
          <ExamplePic src={quarterPic} alt="Example of a quarter serving" />
          <Text>Quarter</Text>
        </Example>

        <Example>
          <ExamplePic src={halfPic} alt="Example of a half serving" />
          <Text>Half</Text>
        </Example>

        <Example>
          <ExamplePic src={mostlyPic} alt="Example of a mostly serving" />
          <Text>Mostly</Text>
        </Example>

        <Example>
          <ExamplePic src={wholePic} alt="Example of a whole serving" />
          <Text>Whole</Text>
        </Example>
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
  className: 'w-11/12 mx-auto font-xl text-center mb-5 mt-5',
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

const ExamplePic = styled.img.attrs({
  className: '',
})``

export default ProportionExamples
