import { useState } from 'react'
import styled from 'styled-components'

import illustration1 from '../public/illustrations/illustration_1.png'
import illustration2 from '../public/illustrations/illustration_2.png'
import illustration3 from '../public/illustrations/illustration_3.png'

import progress1 from '../public/icons/progress_1.svg'
import progress2 from '../public/icons/progress_2.svg'
import progress3 from '../public/icons/progress_3.svg'

import arrowRight from '../public/icons/arrow_right.svg'

import { useRouteDispatchUnauth } from '../context/unauthRouteContext'

const Welcome = () => {
  const routeDispatch = useRouteDispatchUnauth()

  const [stageIndex, setStageIndex] = useState(0)
  const stage = Stages[Object.keys(Stages)[stageIndex]]

  return (
    <div className="pt-10 pb-4d5 px-4 h-screen">
      <Card stage={stage} />
      <div className="flex justify-between pt-3 sm:pt-4">
        <Dots stage={stage} />
        <Button
          stage={stage}
          stageIndex={stageIndex}
          setStageIndex={setStageIndex}
          routeDispatch={routeDispatch}
        />
      </div>
    </div>
  )
}

const Stages = {
  Start: {
    illustration: illustration1,
    title: 'Hi!',
    copy:
      'Thanks for agreeing to take part in Snapeat. A project to see how children in Lambeth and Southwark eat.',
    buttonText: 'Start',
    progress: progress1,
  },
  Next: {
    illustration: illustration2,
    title: 'How does this work?',
    copy:
      'To take part, use this simple app to share what your child is eating for dinner each night for the next 3 months.',
    buttonText: 'Next',
    progress: progress2,
  },
  LetsGo: {
    illustration: illustration3,
    title: 'Get everyone involved!',
    copy:
      'Taking part is quick, easy and, hopefully, fun for you and your children too!',
    buttonText: "Let's go!",
    progress: progress3,
  },
}

const Card = ({ stage }) => (
  <CardContainer>
    <div className="self-end">
      <CardImage src={stage.illustration} />
    </div>
    <div className="self-start">
      <p className="font-extrabold font-xxl lh-xxl mb-1d5 mt-2d5">
        {stage.title}
      </p>
      <p className="font-lg sm:font-xl">{stage.copy}</p>
    </div>
  </CardContainer>
)

const CardContainer = styled.div.attrs({
  className: 'text-navy bg-white rounded-card shadow-2 py-4 px-6 h-80',
})`
  display: grid;
  grid-template-rows: 60% 40%;
`

const CardImage = styled.img.attrs({
  className: 'm-auto',
})`
  max-height: 100%;
  max-height: -moz-available; /* WebKit-based browsers will ignore this. */
  max-height: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
  max-height: fill-available;
`

const Dots = ({ stage }) => <img src={stage.progress} alt="form progress" />
const Button = ({ stage, setStageIndex, stageIndex }) => (
  <ButtonWithArrow
    onClick={
      stageIndex === 2
        ? () => (location = `${location}api/login`)
        : () => setStageIndex(stageIndex + 1)
    }
  >
    {stage.buttonText}
  </ButtonWithArrow>
)

const ButtonWithArrow = styled.button.attrs({
  className:
    'text-white text-left rounded-button w-1/2 shadow-button px-5 sm:px-9 py-3 sm:py-4 bg-right',
})`
  background: ${cssTheme('colors.navy')} url(${arrowRight}) no-repeat 85%;
`

export default Welcome
