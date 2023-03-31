import Blogs from "./Components/Blogs"
import Header from "./Components/Header"
import QuestionsAnswers from "./Components/QuestionsAnswers"

function App() {

  return (
    <div className="w-[80%] md:w-[90%] lg:w-[80%] mx-auto">
      <Header />
      <hr className="mb-6 text-gray-900 border-t-2 rounded-xl"/>
      <Blogs />
      <QuestionsAnswers />
    </div>
  )
}

export default App
