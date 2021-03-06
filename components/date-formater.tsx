import { parseISO, format, formatDistanceToNow } from 'date-fns'

type Props = {
  dateString: string
}

const DateFormater = ({ dateString }: Props) => {
  const date = parseISO(dateString)
  return (
    <>
      <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time> (
      {formatDistanceToNow(date, { addSuffix: true })})
    </>
  )
}

export default DateFormater
