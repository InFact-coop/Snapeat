import { ThemeProvider } from 'styled-components'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config'
import { RouteProvider } from './routeContext'
import { FoodDataProvider } from './foodDataContext'
import { ProjectProvider } from './projectContext'

const { theme } = resolveConfig(tailwindConfig)

const AppProviders = ({ children }) => (
  <RouteProvider>
    <ThemeProvider theme={theme}>
      <ProjectProvider>
        <FoodDataProvider>{children}</FoodDataProvider>
      </ProjectProvider>
    </ThemeProvider>
  </RouteProvider>
)

export default AppProviders
