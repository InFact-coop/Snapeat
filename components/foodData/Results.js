import styled from 'styled-components'

const Text = styled.p.attrs({
  className: 'font-xxl text-center mb-5 mt-5',
})``

// eslint-disable-next-line no-unused-vars
const Results = ({ values }) => {
  // eslint-disable-next-line no-unused-vars
  const { categories, proportionFruit, proportionVeg, tags } = values

  return (
    <section>
      <Text>In summary, tonight&apos;s meal was composed of</Text>
      <Text>Roughly, the amount of vegetables on the plate was:</Text>
      <Text>and it was:</Text>
    </section>
  )
}

Results.componentName = 'Results'

export default Results
