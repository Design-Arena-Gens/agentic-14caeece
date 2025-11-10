export const metadata = {
  title: 'Family Oak Logo',
  description: 'A family logo featuring an oak acorn',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
