import ExpenseFormList from "./ExpenseFormList";
import PageRefresh from "./PageRefresh";
import Header from "./Header";
import Footer from "./Footer";
import './index.css';

function App() {


  return (
    <>
      <PageRefresh />
      <Header />
      <ExpenseFormList />
      <Footer />
    </>
  )
}

export default App;