import React from 'react'
import { RxArrowTopRight } from 'react-icons/rx'

type Props = {
  children: React.ReactNode
  href: string,
  icon?: 'visible' | 'invisible'
}
type LinkProp = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

type CombinedProps = Props & LinkProp

export default function Link({ children = 'link', href = "https://sfwn.me", icon = 'visible', ...rest }: CombinedProps) {
  return (
    <a {...rest} href={href} title='' className='font-mono text-blue-500 text-sm flex items-center'>{children
    }{icon === 'visible' && <RxArrowTopRight />}</a>
  )
}