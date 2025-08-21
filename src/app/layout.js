import './globals.css'

export const metadata = {
  title: 'Newway Express - Logistics Solutions',
  description: 'Leading global logistics and supply chain solutions provider. Delivering excellence, on time, every time.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
