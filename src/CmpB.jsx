import { styled } from '@linaria/react'
import { forwardRef } from 'react'

const Root = styled.div`
  color: orchid;
`

export const CmpB = forwardRef(() => {
  return <Root>orchid</Root>
})
