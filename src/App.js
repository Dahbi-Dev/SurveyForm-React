import Comment from "./Comment";
import FormGroup from "./FormGroup";
import Header from "./Header";
import ImproveCheckbox from "./ImproveCheckbox";
import Recommended from "./Recommended";


function App() {
  return (
    <div className="container">
      <Header />
      <form id="survey-form">
        <FormGroup />
        <Recommended />
        <ImproveCheckbox />
        <Comment />
      </form>
    </div>
  );
}

export default App;
