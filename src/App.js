import './App.css';
import NavBar from './components/NavBar'
import TextForm from './components/TextForm';

function App() {
	return (
		<>
		<NavBar title="Faizan" link="Hello"/>
		<div className="container my-3">
			<TextForm heading="Enter a text to analyze below: "/>
		</div>
		</>
	);
}

export default App;