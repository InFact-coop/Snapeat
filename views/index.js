import {
  HOME,
  ONBOARDING,
  WELCOME,
  SIGN_UP,
  MENU,
  CATEGORY_SELECT,
  ERROR,
} from '../utils/constants'
import Home from './Home'
import Onboarding from './Onboarding'
import Welcome from './Welcome'
import SignUp from './SignUp'
import Menu from './Menu'
import Error from './Error'
import CategorySelect from './CategorySelect'

export default {
  [HOME]: Home,
  [ONBOARDING]: Onboarding,
  [WELCOME]: Welcome,
  [SIGN_UP]: SignUp,
  [ERROR]: Error,
  [MENU]: Menu,
  [CATEGORY_SELECT]: CategorySelect,
}
