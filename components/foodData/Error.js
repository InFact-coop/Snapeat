import styled from 'styled-components'

import logo from '../../public/logos/logo1.svg'
import emptyplate from '../../public/images/empty-plate.jpg'

const Text = styled.p.attrs({
  className: 'font-xxl text-center mb-5 mt-5',
})``

const Error = () => {
  return (
    <section>
      <img className="mt-4 m-auto" alt="Snapeat logo" src={logo} />
      <img className="my-9 m-auto" alt="checkmark" src={emptyplate} />
      <Text className="font-bold text-red">
        Oh no, it looks like something went wrong.
      </Text>
      <p className="text-center text-lg text-red mb-4">
        Please let us know what happened by{' '}
        <a
          className="underline"
          href="https://airtable.com/shrA8ckDkLTVqLoab"
          target="_blank"
          rel="noopener noreferrer"
        >
          filling in this form
        </a>{' '}
        and then try again.
      </p>
      {/* <p className="m-auto text-center">
        If the problem persists, don&#39;t hesitate to{' '}
        <a
          className="underline"
          href="https://airtable.com/shrA8ckDkLTVqLoab"
          target="_blank"
          rel="noopener noreferrer"
        >
          contact us.
        </a>
      </p> */}
    </section>
  )
}

Error.componentName = 'Error'

export default Error
