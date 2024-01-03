import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'chartbot',
  description: 'Val`s chartbot',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
<df-messenger
  intent="WELCOME"
  chat-title="UTS_CHATBOT"
  agent-id="7fb54c25-55c9-4a10-9a95-e9cc608cbc15"
  language-code="en"
></df-messenger>
      </body>
    </html>
  )
}
