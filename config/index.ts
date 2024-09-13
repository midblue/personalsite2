import jasper from '../config/jasper'
import mariko from '../config/mariko'
import { whichToUse } from '../whichConfigToUse'

export const config: Config = { jasper, mariko }[whichToUse] || jasper
