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
  faEnvelope,
  faExternalLinkAlt,
  faFileAlt,
  faDatabase,
  faTrophy,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons'

import {
  faLinkedin,
  faGithub,
  faKaggle,
} from '@fortawesome/free-brands-svg-icons'

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
  faHandshake,
  faEnvelope,
  faLinkedin,
  faExternalLinkAlt,
  faFileAlt,
  faDatabase,
  faTrophy,
  faGlobe,
  faGithub,
  faKaggle
)

export const install = ({ isClient, app }) => {
  app.component('font-awesome-icon', FontAwesomeIcon)
}
