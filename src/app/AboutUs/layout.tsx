export default function BigLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>
        <h1>这里是BigLayout</h1>
      
        {children}
        </section>
  }