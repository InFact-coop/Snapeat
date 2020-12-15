import styled from 'styled-components'

import loading from '../../public/icons/loading.svg'

const Text = styled.p.attrs({
  className: 'font-xxl text-center text-white mb-5 mt-5',
})``

// eslint-disable-next-line no-unused-vars
const Spinner = ({ values }) => {
  // eslint-disable-next-line no-unused-vars
  const { categories, proportionFruit, proportionVeg, tags } = values

  return (
    <section className="bg-navy">
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <img alt="Loading" src={loading} />
        <Text>Uploading...</Text>
      </div>
    </section>
  )
}

Spinner.componentName = 'Spinner'

export default Spinner
