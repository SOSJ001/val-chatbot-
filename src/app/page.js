
export default function Home() {
  return (
    <main className="flex flex-col items-center p-24 space-y-4">
      <h1 className=" text-2xl">TESTING THE CHARTBOT</h1>
      <div className="space-y-5 overflow-hidden p-5 border-3 border rounded-lg border-red-400 w-full flex-row items-center justify-center ">
        <div className="w-full text-center">THIS IS WHERE YOUR CODE WILL GO</div> 
        <div className="w-full text-center">The chartbot is down by the buttom right</div>
        
      </div>
      <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
<df-messenger
  intent="WELCOME"
  chat-title="UTS_CHATBOT"
  agent-id="7fb54c25-55c9-4a10-9a95-e9cc608cbc15"
  language-code="en"
></df-messenger>
    </main>
  )
}
