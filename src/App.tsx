import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/Home";
import SessionOverview from "./pages/SessionOverview/SessionOverview";
import Sessions from "./pages/Sessions/Sessions";
import {Route, Routes } from "react-router-dom";
import { store } from "./store/store.ts";
import ErrorPage from "./pages/ErrorPage/ErrorPage.tsx";

function App() {
  return ( 
    <Provider store={store}>
      <main className="window">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/session-overview/:id" element={<SessionOverview />}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </main>
    </Provider>
  )
}

export default App;
