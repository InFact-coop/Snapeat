import React, { useState } from 'react'
import styled from 'styled-components'
import close from '../public/icons/close.svg'

const Container = styled.main.attrs({
  className: 'mt-16 flex flex-col',
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

const TooltipLink = styled.button.attrs({
  type: 'button',
  className: 'border-0 underline text-blue bg-transparent self-start mt-2d5',
})``

const Tooltip = styled.aside.attrs({
  className:
    'text-center fixed z-1 bg-white left-0 bottom-0 pt-6 pb-20 px-4 shadow-tooltip rounded-tooltip',
})``

const Close = styled.button.attrs({
  className: 'border-0 bg-transparent w-5 h-5 block ml-auto mb-15',
  type: 'button',
  alt: 'Close tooltip',
})`
  background: url(${close});
`

const FormStep = ({
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
          <Close onClick={() => setShowTooltip(false)} />
          <H1>{tooltipTitle}</H1>
          {tooltipContents}
        </Tooltip>
      )}
    </Container>
  )
}

export default FormStep
