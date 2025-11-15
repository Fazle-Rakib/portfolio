/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
  faUserSecret,
  faSearch,
  faWandMagicSparkles,
  faSnowflake,
  faCode,
  faMicroscope,
  faLightbulb,
  faBullseye,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(
  faUserSecret,
  faSearch,
  faWandMagicSparkles,
  faSnowflake,
  faCode,
  faMicroscope,
  faLightbulb,
  faBullseye,
  faHandshake
)

export const install = ({ isClient, app }) => {
  app.component('font-awesome-icon', FontAwesomeIcon)
}
