import { HOME, AWAY } from "../utils/constants"
import Home from "./Home"
import Away from "./Away"

const routes = {
  [HOME]: Home,
  [AWAY]: Away,
}

export default routeName => routes[routeName]()
