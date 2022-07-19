import React from 'react'

interface NameProps {
  firstName: string
  middleName?: string
  lastName: string
}

export const Name = (props: NameProps) => {

  return (
    <div data-testid="name-section">This person's name is: {props.firstName} {props.middleName} {props.lastName}</div>
  )
}
