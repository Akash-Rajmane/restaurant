import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
// import Modal from "./components/UI/Modal/Modal";
// import Backdrop from "./components/UI/Backdrop/Backdrop";

function App() {
  return (
    <>
      <Header/>
      <main>
        <Meals />
        {/* <Modal/>
        <Backdrop/> */}
      </main>
    </>
  );
}

export default App;
