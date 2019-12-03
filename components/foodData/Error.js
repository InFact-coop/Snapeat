import styled from 'styled-components'

import logo from '../../public/logos/logo1.svg'
import emptyplate from '../../public/images/empty-plate.jpg'

const Text = styled.p.attrs({
  className: 'font-xxl text-center mb-5 mt-5',
})``

// eslint-disable-next-line no-unused-vars
const Error = ({ values }) => {
  // eslint-disable-next-line no-unused-vars
  const { categories, proportionFruit, proportionVeg, tags } = values

  return (
    <section>
      <img className="mt-4 m-auto" alt="Snapeat logo" src={logo} />
      <img className="mt-9 mb-4 m-auto" alt="checkmark" src={emptyplate} />
      <Text className="font-bold text-red">
        Oh no, it looks like something went missing.
      </Text>
      <p className="text-center text-lg text-red mb-4">Please try again.</p>
      <p className="m-auto text-center">
        If the problem persists, don&#39;t hesitate to{' '}
        <a
          className="underline"
          href="mailto:hello@infactcoop.com?subject=Snapeat Problem Report"
        >
          contact us.
        </a>
      </p>
    </section>
  )
}

Error.componentName = 'Error'

export default Error
