import dayjs from 'dayjs'
import isTomorrow from 'dayjs/plugin/isTomorrow'
import isToday from 'dayjs/plugin/isToday'

export const getIncomingDay = (date: Date) => {
  dayjs.extend(isTomorrow)
  dayjs.extend(isToday)

  const tomorrow = dayjs(date).isTomorrow()

  if (tomorrow) {
    return 'Tomorrow'
  }

  const today = dayjs(date).isToday()

  if (today) {
    return 'Today'
  }

  return undefined
}
