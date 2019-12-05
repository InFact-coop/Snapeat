import styled from 'styled-components'

import loading from '../public/icons/loading.svg'

const Text = styled.p.attrs({
  className: 'font-xxl text-center text-white mb-5 mt-5',
})``
const Spinner = () => (
  <section className="bg-navy">
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <img alt="Loading" src={loading} />
      <Text>Loading...</Text>
    </div>
  </section>
)

export default Spinner
