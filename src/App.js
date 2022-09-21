import { useState } from 'react';

import './App.css';

function App() {
	let [number, setNumber] = useState(0);

	const klik = () => {
		setNumber((number += 1));

		console.log(number);
	};

	return (
		<>
			<h1>Counter App</h1>
			<p>Nilai dari counter saat ini {number}</p>
			<button onClick={() => klik()}>Click</button>
		</>
	);
}

export default App;
