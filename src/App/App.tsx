import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Suspense, useEffect } from "react";
import { auth, db } from "firebase-app/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { setCurrentUser } from "pages/Auth/auth.slice";
import { doc, getDoc } from "firebase/firestore";
import { useAppDispatch } from "./store";

const MainLayout = React.lazy(() => import("layouts/MainLayout"));
const Home = React.lazy(() => import("pages/Home/Home"));
const SignUp = React.lazy(() => import("pages/Auth/SignUp"));
const SignIn = React.lazy(() => import("pages/Auth/SignIn"));
const Detail = React.lazy(() => import("pages/Detail/Detail"));
const Watch = React.lazy(() => import("pages/Watch/Watch"));
const Explore = React.lazy(() => import("pages/Explore/Explore"));
const Category = React.lazy(() => import("pages/Category/Category"));
const History = React.lazy(() => import("pages/History/History"));
const Search = React.lazy(() => import("pages/Search/Search"));
const Favorites = React.lazy(() => import("pages/Favorites/Favorites"));

const App = () => {
  // check at page load if a user is authenticated
  const dispatch = useAppDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        setTimeout(async () => {
          const docRef = doc(db, `users/${userAuth.uid}`);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) dispatch(setCurrentUser(docSnap.data()));
        }, 600);
      } else {
        dispatch(setCurrentUser(null));
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <Suspense>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/watch/:id" element={<Watch />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/history" element={<History />} />
            <Route path="/search" element={<Search />} />
            <Route path="/favorites" element={<Favorites />} />
          </Route>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
