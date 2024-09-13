import jasper from '../config/jasper'
import mariko from '../config/mariko'

export const config: Config =
  { jasper, mariko }[process.env.CONFIG || 'jasper'] || jasper
