import React, { useState, useEffect } from "react"
import styled from "styled-components"

import illustration_1 from "../static/illustrations/illustration_1.png"
import illustration_2 from "../static/illustrations/illustration_2.png"
import illustration_3 from "../static/illustrations/illustration_3.png"

import progress_1 from "../static/icons/progress_1.svg"
import progress_2 from "../static/icons/progress_2.svg"
import progress_3 from "../static/icons/progress_3.svg"

import arrow_right from "../static/icons/arrow_right.svg"

import { useRouteDispatch } from "../utils/routeContext"
import { CHANGE_VIEW, SIGN_UP } from "../utils/constants"

const Stages = {
  Start: {
    illustration: illustration_1,
    title: "Hi!",
    copy:
      "Thanks for agreeing to take part in Snapeat. A project to see how children in Lambeth and Southwark eat.",
    buttonText: "Start",
    progress: progress_1,
  },
  Next: {
    illustration: illustration_2,
    title: "How does this work?",
    copy:
      "To take part, use this simple app to share what your child is eating for dinner each night for the next 3 months.",
    buttonText: "Next",
    progress: progress_2,
  },
  LetsGo: {
    illustration: illustration_3,
    title: "Get everyone involved!",
    copy:
      "Taking part is quick, easy and, hopefully, fun for you and your children too!",
    buttonText: "Let's go!",
    progress: progress_3,
  },
}

const Welcome = () => {
  const routeDispatch = useRouteDispatch()

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
  className: "text-navy bg-white rounded-card shadow-2 py-4 px-6 h-80",
})`
  display: grid;
  grid-template-rows: 60% 40%;
`

const CardImage = styled.img.attrs({
  className: "m-auto",
})`
  max-height: 100%;
  max-height: -moz-available; /* WebKit-based browsers will ignore this. */
  max-height: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
  max-height: fill-available;
`

const Dots = ({ stage }) => <img src={stage.progress} />
const Button = ({ stage, setStageIndex, stageIndex, routeDispatch }) => (
  <ButtonWithArrow
    onClick={
      stageIndex !== 2
        ? () => setStageIndex(stageIndex + 1)
        : () => routeDispatch({ type: CHANGE_VIEW, view: SIGN_UP })
    }
  >
    {stage.buttonText}
  </ButtonWithArrow>
)

const ButtonWithArrow = styled.button.attrs({
  className:
    "text-white text-left rounded-button w-1/2 shadow-button px-5 sm:px-9 py-3 sm:py-4 bg-right",
})`
  background: ${cssTheme("colors.navy")} url(${arrow_right}) no-repeat 85%;
`

export default Welcome
