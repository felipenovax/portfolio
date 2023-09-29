import React from 'react';
import { Header } from './App/components/Header/Header';
import { About } from './App/components/About/About';
import { Knowledge } from 'App/components/Knowledge/Knowledge';
import { Contact } from 'App/components/Contact/Contact';
import { Footer } from 'App/components/Footer/Footer';

function App() {
	return (
		<main>
			<Header />
			<About />
			<Knowledge />
			<Contact />
			<Footer />
		</main>
	);
}

export default App;
