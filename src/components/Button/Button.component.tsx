import './Button.component.scss';

export enum ButtonColor {
  red = 'red',
  green = 'green'
}

export enum ButtonSize {
  default = 'default',
  large = 'large',
  small = 'small'
}

interface ButtonProps {
  children: React.ReactNode,
  color?: ButtonColor,
  size?: ButtonSize,
  onClick: any
}

function Button(props: ButtonProps) {
  const color = props.color || ButtonColor.green;
  const size = props.size || ButtonSize.default;

  return (
    <button onClick={ () => props.onClick()  }type="button" className={`button size-${size} color-${color}`}>{ props.children }</button>
  )
} 

export default Button;