/** @format */
import { useRouter } from "./hooks/useRouter";
function App() {
	const routes = useRouter();
	return <div className="wrapper">{routes}</div>;
}

export default App;
