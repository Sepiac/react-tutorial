import { render, screen } from '@testing-library/react'
import {Name} from '../Name'


it('should render firstName and lastName', () => {
  render(<Name firstName='first' lastName='last' />)
  expect(screen.getByTestId('name-section').textContent).toEqual('This person\'s name is: first  last')
})