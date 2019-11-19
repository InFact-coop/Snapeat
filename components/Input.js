import styled from 'styled-components'

const TextInput = styled.input.attrs(({ placeholder }) => ({
  className: 'bg-lightgray w-full border-b-2 border-navy',
  placeholder,
}))``

export { TextInput }
