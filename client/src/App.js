/** @format */
import { useSelector } from "react-redux";
import { useRouter } from "./hooks/useRouter";
import { getCurrentUserId } from "./store/user";

function App() {
	const isAuth = useSelector(getCurrentUserId());
	const [privateRoutes, publicRoutes] = useRouter();

	return <div className="wrapper">{isAuth ? publicRoutes : privateRoutes}</div>;
}

export default App;
// {
// 	"apiEndpoint": "http://localhost:8080/api"
// }
// {
// 	"apiEndpoint": "https://registration-form-gamma-ten.vercel.app/api"
// }
