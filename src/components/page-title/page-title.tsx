type Props = {
  title: string
}

export default function PageTitle({ title }: Props) {
  return <h2 className="text-center text-3xl font-extrabold">{title}</h2>
}
