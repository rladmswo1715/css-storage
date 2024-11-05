import Main from "pages/main/Main";
import First from "pages/storage/first/First";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
          <Route path="pr1" element={<First />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
