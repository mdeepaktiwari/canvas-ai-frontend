import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Flip, ToastContainer } from "react-toastify";
import Nav from "./component/Nav";
import { AuthProvider } from "./context/auth";
import ProtectedRoute from "./component/ProtectedRoute";
import { lazy, Suspense, useEffect, useState } from "react";
import LoadingSpinner from "./component/LoadingSpinner";
import ServerStatusBanner from "./component/ServerStatusBanner";
import "./App.css";
import api from "./api";
import { io } from "socket.io-client";
import { SERVER_STATUS } from "./constant";
import { BACKEND_URL } from "./services/endpoints";

const Home = lazy(() => import("./page/Home"));
const Image = lazy(() => import("./page/Image"));
const Content = lazy(() => import("./page/Content"));
const SignUp = lazy(() => import("./page/SignUp"));
const Login = lazy(() => import("./page/Login"));
const GenerateImage = lazy(() => import("./page/GenerateImage"));
const GenerateContent = lazy(() => import("./page/GenerateContent"));
const ImageHistory = lazy(() => import("./page/ImageHistory"));
const ContentHistory = lazy(() => import("./page/ContentHistory"));
const ContentDetails = lazy(() => import("./page/ContentDetails"));
const Pricing = lazy(() => import("./page/Pricing"));

function App() {
  const [serverStatus, setServerStatus] = useState(SERVER_STATUS.IDLE);

  useEffect(() => {
    let socket;

    const wakeServer = async () => {
      try {
        setServerStatus(SERVER_STATUS.WAKING);
        await api.get("/health");

        socket = io(BACKEND_URL, {
          withCredentials: true,
          transports: ["websocket", "polling"],
        });

        socket.on("connect", () => {
          console.log("WebSocket connected", socket.id);
        });

        socket.on("server_status", (payload) => {
          if (payload?.status === SERVER_STATUS.READY) {
            setServerStatus(SERVER_STATUS.READY);
          }
        });

        socket.on("connect_error", () => {
          setServerStatus(SERVER_STATUS.ERROR);
        });

        // handle if you want to show banner again
        // socket.on("disconnect", () => {});
      } catch (error) {
        setServerStatus(SERVER_STATUS.ERROR);
      }
    };

    wakeServer();

    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />
      <AuthProvider>
        {serverStatus === SERVER_STATUS.WAKING && <ServerStatusBanner />}
        <Nav />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<SignUp />}></Route>
            <Route
              path="/image"
              element={
                <ProtectedRoute>
                  <Image />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/image/generate"
              element={
                <ProtectedRoute>
                  <GenerateImage />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/image/history"
              element={
                <ProtectedRoute>
                  <ImageHistory />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/content"
              element={
                <ProtectedRoute>
                  <Content />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/content/:action"
              element={
                <ProtectedRoute>
                  <GenerateContent />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/content/history"
              element={
                <ProtectedRoute>
                  <ContentHistory />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="content-details/:id"
              element={
                <ProtectedRoute>
                  <ContentDetails />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/pricing"
              element={
                <ProtectedRoute>
                  <Pricing />
                </ProtectedRoute>
              }
            ></Route>
          </Routes>
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
