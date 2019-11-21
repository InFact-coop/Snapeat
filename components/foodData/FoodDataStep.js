import { useState } from 'react'
import styled from 'styled-components'
import { Tooltip, TooltipLink, TooltipClose } from '../Tooltip'

const Card = styled.section.attrs(({ position }) => ({
  className: `z-10 ${position || 'absolute'} w-screen bg-white`,
}))`
  top: 40%;
  height: 20rem;
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;
`

const H1 = styled.h1.attrs({
  className: 'font-xxl text-center mb-5 mt-6',
})``

const FoodDataStep = ({
  children,
  h1,
  tooltipTitle,
  tooltipContents,
  position,
}) => {
  const [showTooltip, setShowTooltip] = useState(false)
  return (
    <Card position={position}>
      <H1>{h1}</H1>
      {children}

      {tooltipTitle && (
        <TooltipLink onClick={() => setShowTooltip(true)}>
          Why do you need this?
        </TooltipLink>
      )}

      {showTooltip && (
        <Tooltip>
          <TooltipClose onClick={() => setShowTooltip(false)} />
          <H1>{tooltipTitle}</H1>
          {tooltipContents}
        </Tooltip>
      )}
    </Card>
  )
}

export { FoodDataStep as default, Card, H1 }
