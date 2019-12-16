import { useState, useEffect } from 'react'
import axios from 'axios'
import * as Yup from 'yup'
import * as R from 'ramda'
import { Input, SelectInput } from '../Input'
import OnboardingStep from './OnboardingStep'

const validation = Yup.object().shape({
  project: Yup.string().required('You need to select a project to continue'),
})

const tooltipContents = (
  <>
    <p className="mb-5">
      At the SnapEat Project we want to learn what children in Lambeth and
      Southwark are eating when they are at home.
    </p>
    <p className="mb-5">
      By securely sharing this additional information, you will help us to make
      sure we are hearing and learning from a range of different households.
    </p>
  </>
)

const Projects = ({ values, setFieldValue }) => {
  const [availableProjects, setAvailableProjects] = useState([])

  useEffect(() => {
    const source = axios.CancelToken.source()

    const getOptions = async () => {
      try {
        const {
          data: { projects },
        } = await axios.get(`${process.env.HOST}/api/get-available-projects`, {
          cancelToken: source.token,
        })

        return R.pipe(
          R.map(({ name, slug }) => ({
            label: name,
            value: slug,
          })),
          setAvailableProjects,
        )(projects)
      } catch (e) {
        // eslint-disable-next-line
        debugger
        // eslint-disable-next-line
        console.log('e', e)
        // eslint-disable-next-line
        console.log('Inside useEffect catch')
      }
    }

    getOptions()

    return () => {
      source.cancel()
    }
  }, [])

  return (
    <OnboardingStep
      {...{
        h1: 'OK, one last thing!',
        h2: 'Next question:',
        question:
          'Which of the following projects invited you to join this app?',
        tooltipTitle: 'Why do we need this information?',
        tooltipContents,
        className: 'pb-36',
      }}
    >
      <Input
        Component={SelectInput}
        name="project"
        options={availableProjects}
        value={values.project}
        onChange={({ target: { value } }) => setFieldValue('project', value)}
        placeholder="Select a project..."
        className={values.project ? 'text-navy' : 'text-lightnavy'}
      />
    </OnboardingStep>
  )
}
Projects.componentName = 'Projects'
Projects.validation = validation

export default Projects
