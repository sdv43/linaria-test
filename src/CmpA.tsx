import { styled } from '@linaria/react'
import { forwardRef } from 'react'

const Root = styled.div`
  color: crimson;
`

export const CmpA = forwardRef(() => {
  return <Root>crimson</Root>
})
