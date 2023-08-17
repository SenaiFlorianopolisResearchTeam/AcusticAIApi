import LandingBar from "@/components/landingBar"
import "../scss/index.scss"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LandingBar page="home"/>
        {children}
      </body>
    </html>
  )
}
