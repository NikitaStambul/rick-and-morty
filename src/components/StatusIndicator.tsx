import { CSSProperties } from "react"

export default function StatusIndicator(props: {
  status: 'Alive' | 'Dead' | 'unknown'
}) {
  const background = props.status === 'Alive' ? 'rgb(85, 204, 68)' : props.status === 'Dead' ? 'rgb(204, 68, 68)' : 'rgb(226, 226, 226)'

  const styles: CSSProperties = {
    display: 'inline-flex',
    height: '0.5rem',
    width: '0.5rem',
    background,
    borderRadius: ' 50%',
  }

  return <span style={styles} />
}
