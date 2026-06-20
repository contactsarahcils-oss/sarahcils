import RevealObserver from '@/components/ui/RevealObserver'

export default function FormationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RevealObserver />
      {children}
    </>
  )
}
