import styled from 'styled-components'
import close from '../public/icons/close.svg'

const TooltipLink = styled.button.attrs({
  type: 'button',
  className: 'border-0 underline text-blue bg-transparent self-start mt-2d5',
})``

const Tooltip = styled.aside.attrs({
  className:
    'text-center fixed z-20 bg-white left-0 bottom-0 pt-6 pb-20 px-4 shadow-tooltip rounded-tooltip',
})``

const TooltipClose = styled.button.attrs({
  className: 'border-0 bg-transparent w-5 h-5 block ml-auto mb-15',
  type: 'button',
  alt: 'Close tooltip',
})`
  background: url(${close});
`
export { Tooltip, TooltipLink, TooltipClose }
