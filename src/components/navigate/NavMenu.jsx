import MaleFemale from "../maleFemale/MaleFemale";
import Signin from "../pages/signin/Signin";
import Forget from "../pages/forget/Forget";
import Register from "../pages/register/Register";
import Error from '../pages/error/Error';
export const NavMenu = [
	{ id: 1, element: <MaleFemale />, path: "/", menu: false },
	{ id: 2, name: "signin", element: <Signin />, path: "/signin", menu: false},
	{ id: 4, name: "forget", element: <Forget />, path: "/forget", menu: false, },
	{ id: 3, name: "registration", element: <Register />, path: "/registration", menu: false, },
	{ id: 5, name: "error", element: <Error />, path: "*", menu: false }
];