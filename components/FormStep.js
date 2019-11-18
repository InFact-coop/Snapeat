import React from 'react'
import styled from 'styled-components'

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
  className: 'border-0 underline text-blue bg-transparent self-start mt-2d5',
})``

const Tooltip = styled.aside.attrs({
  className: '',
})``

const FormStep = ({
  children,
  h1,
  h2,
  question,
  description,
  tooltipContents,
}) => {
  return (
    <Container>
      <H1>{h1}</H1>
      <H2>{h2}</H2>
      <Question>{question}</Question>
      <Description>{description}</Description>
      {children}
      <TooltipLink>Why do you need this?</TooltipLink>
      <Tooltip>{tooltipContents}</Tooltip>
    </Container>
  )
}

export default FormStep
