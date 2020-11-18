import { Frequency } from './types'

export const Frequencies: (keyof typeof Frequency)[] = [
  'YEARLY',
  'MONTHLY',
  'WEEKLY',
  'DAILY',
  'HOURLY',
  'MINUTELY',
  'SECONDLY'
]

export const FrequenciesHash = {
  'YEARLY': Frequency.YEARLY,
  'MONTHLY': Frequency.MONTHLY,
  'WEEKLY': Frequency.WEEKLY,
  'DAILY': Frequency.DAILY,
  'HOURLY': Frequency.HOURLY,
  'MINUTELY': Frequency.MINUTELY,
  'SECONDLY': Frequency.SECONDLY
}
