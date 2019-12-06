import { FoodDataProvider } from './foodDataContext'

const AppProviders = ({ children }) => (
  <FoodDataProvider>{children}</FoodDataProvider>
)

export default AppProviders
