import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./index.scss";
import { PageWelcome } from "./pages/PageWelcome.tsx";
import { PageInfo } from "./pages/PageInfo.tsx";
import { PageWeather } from "./pages/PageWeather.tsx";
import { PageLearn } from "./pages/PageLearn.tsx";
import { Page404 } from "./pages/Page404.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <Page404 />,
		element: <App />,
		children: [
			{
				path: "/welcome",
				element: <PageWelcome />,
			},
			{
				path: "info",
				element: <PageInfo />,
			},
			{
				path: "about",
				element: <PageWeather />,
			},
			{
				path: "learn",
				element: <PageLearn />,
			},
			{
				path: "/",
				element: <Navigate to="/welcome" replace />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router} />
);
