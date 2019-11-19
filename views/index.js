import {
  HOME,
  ONBOARDING,
  WELCOME,
  SIGN_UP,
  MENU,
  CATEGORY_SELECT,
  ERROR,
  LOADING,
} from '../utils/constants'
import Home from './Home'
import Onboarding from './Onboarding'
import Welcome from './Welcome'
import SignUp from './SignUp'
import Menu from './Menu'
import Error from './Error'
import Loading from './Loading'
import CategorySelect from './CategorySelect'

export default {
  [HOME]: Home,
  [ONBOARDING]: Onboarding,
  [WELCOME]: Welcome,
  [SIGN_UP]: SignUp,
  [ERROR]: Error,
  [MENU]: Menu,
  [LOADING]: Loading,
  [CATEGORY_SELECT]: CategorySelect,
}
