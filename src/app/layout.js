import { Inter } from 'next/font/google';
import Head from 'next/head';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'chartbot',
  description: 'Val chartbot',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script async src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
      </Head>
      <body className={inter.className}>
        {children}
        <df-messenger
          intent="WELCOME"
          chat-title="UTS_CHATBOT"
          agent-id="7fb54c25-55c9-4a10-9a95-e9cc608cbc15"
          language-code="en"
        ></df-messenger>
      </body>
    </html>
  );
}
