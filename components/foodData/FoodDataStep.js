import { useState } from 'react'
import { Tooltip, TooltipLink, TooltipClose } from '../Tooltip'
import { CardBackground, Title } from './shared'

const FoodDataStep = ({ children, h1, tooltipTitle, tooltipContents }) => {
  const [showTooltip, setShowTooltip] = useState(false)
  return (
    <CardBackground>
      <Title>{h1}</Title>
      {children}

      {tooltipTitle && (
        <TooltipLink onClick={() => setShowTooltip(true)}>
          Why do you need this?
        </TooltipLink>
      )}

      {showTooltip && (
        <Tooltip>
          <TooltipClose onClick={() => setShowTooltip(false)} />
          <Title>{tooltipTitle}</Title>
          {tooltipContents}
        </Tooltip>
      )}
    </CardBackground>
  )
}

export default FoodDataStep
