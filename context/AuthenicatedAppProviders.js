import { FoodDataProvider } from './foodDataContext'
import { ProjectProvider } from './projectContext'

const AppProviders = ({ children }) => (
  <ProjectProvider>
    <FoodDataProvider>{children}</FoodDataProvider>
  </ProjectProvider>
)

export default AppProviders
