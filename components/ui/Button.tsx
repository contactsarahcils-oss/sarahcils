import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  external?: boolean
  variant?: 'primary' | 'outline' | 'ghost'
  className?: string
  onClick?: () => void
}

export default function Button({ children, href, external, variant = 'primary', className = '' }: ButtonProps) {
  const base = 'inline-block text-sm font-medium px-5 py-2.5 transition-colors'
  const variants = {
    primary: 'bg-[#1A1A18] text-white hover:bg-[#C9A882]',
    outline: 'border border-[#1A1A18] text-[#1A1A18] hover:bg-[#1A1A18] hover:text-white',
    ghost: 'text-[#C9A882] underline hover:no-underline',
  }
  const classes = `${base} ${variants[variant]} ${className}`

  if (!href) return <button className={classes}>{children}</button>
  if (external) return <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>{children}</a>
  return <Link href={href} className={classes}>{children}</Link>
}
