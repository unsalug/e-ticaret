
interface HeadingProps{
    center?: boolean
    text: string
}
const Heading:React.FC<HeadingProps> = ({center,text}) => {
  return (
    <div className="{}">{text}</div>
  )
}

export default Heading