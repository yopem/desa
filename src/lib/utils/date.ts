import dayjs from "dayjs"
import LocalizedFormat from "dayjs/plugin/localizedFormat"

export function formatDate(data: string | Date | null, format: string) {
  dayjs.extend(LocalizedFormat)

  return dayjs(data).format(format)
}
