'use client'

import { CartControl } from '../CartControl'
import { PrimaryInput, PrimaryInputWithIcon } from '../PrimaryInput'
import { Logo, TagHeader, sairaStencil } from './styles'

interface HeaderProps {}

export function Header({}: HeaderProps) {
  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>Capputeeno</Logo>
      <div>
        <PrimaryInputWithIcon placeholder="Procurando por algo específico?" />
        <CartControl />
      </div>
    </TagHeader>
  )
}
