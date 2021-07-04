import React from 'react'

interface ButtonProps {
  handler(): void
  iconName: string
}

const Button: React.FC<ButtonProps> = ({ handler, iconName }) => {
  return (
    <button className="button is-primary is-small" onClick={handler}>
      <span className="icon">
        <i className={`fas ${iconName}`}></i>
      </span>
    </button>
  )
}

export default Button
