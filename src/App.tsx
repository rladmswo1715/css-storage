import IncludeHeaderStructure from "components/layout/IncludeHeaderStructure";
import Main from "pages/main/Main";
import First from "pages/storage/first/First";
import Second from "pages/storage/second/Second";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IncludeHeaderStructure />}>
          <Route index element={<Main />} />
          <Route path="pr1" element={<First />} />
          <Route path="pr2" element={<Second />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
