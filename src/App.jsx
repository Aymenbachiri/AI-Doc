import Navbar from "./components/Navbar";
import PastMedicalHistory from "./components/PastMedicalHistory";
import Middle from "./pages/Middle";
import RightSide from "./pages/RightSide";

function App() {
  return (
    <>
      <Navbar />
      <Middle />
      <RightSide />
      <PastMedicalHistory />
    </>
  );
}

export default App;
