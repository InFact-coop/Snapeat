import styled from 'styled-components'

import logo from '../../public/logos/logo1.svg'
import checkmark from '../../public/illustrations/checkmark.svg'

const Text = styled.p.attrs({
  className: 'font-xxl text-center mb-5 mt-5',
})``

// eslint-disable-next-line no-unused-vars
const Spinner = ({ values }) => {
  // eslint-disable-next-line no-unused-vars
  const { categories, proportionFruit, proportionVeg, tags } = values

  return (
    <section>
      <img className="mt-4 m-auto" alt="Snapeat logo" src={logo} />
      <img className="mt-20 m-auto" alt="checkmark" src={checkmark} />
      <Text className="font-bold">Trying...</Text>
    </section>
  )
}

Spinner.componentName = 'Spinner'

export default Spinner
