import React, { useState } from 'react'
import styled from 'styled-components'

import { Tooltip, TooltipLink, TooltipClose } from '../Tooltip'

const Container = styled.main.attrs({
  className: 'flex flex-col',
})``
const H1 = styled.h1.attrs({
  className: 'font-xxl font-bold text-center mb-5',
})``

const H2 = styled.h2.attrs({
  className: 'font-xl text-center mb-5',
})``

const Question = styled.label.attrs({
  className: 'font-xl w-full',
})``
const Description = styled.p.attrs({
  className: 'font-xs w-full mb-10',
})``

const OnboardingStep = ({
  children,
  h1,
  h2,
  question,
  description,
  tooltipTitle,
  tooltipContents,
}) => {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <Container>
      <H1>{h1}</H1>
      <H2>{h2}</H2>
      <Question>{question}</Question>
      <Description>{description}</Description>
      {children}
      <TooltipLink onClick={() => setShowTooltip(true)}>
        Why do you need this?
      </TooltipLink>
      {showTooltip && (
        <Tooltip>
          <TooltipClose onClick={() => setShowTooltip(false)} />
          <H1>{tooltipTitle}</H1>
          {tooltipContents}
        </Tooltip>
      )}
    </Container>
  )
}

export default OnboardingStep
