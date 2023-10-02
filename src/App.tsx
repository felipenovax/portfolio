import React from 'react';
import { Header } from './App/components/Header/Header';
import { About } from './App/components/About/About';
import { Greetings } from './App/components/Greetings/Greetings';
import { Knowledge } from 'App/components/Knowledge/Knowledge';
import { Contact } from 'App/components/Contact/Contact';
import { Footer } from 'App/components/Footer/Footer';
import { Education } from 'App/components/Education/Education';
import { Experience } from 'App/components/Experience/Experience';
import styles from './App.module.scss';

function App() {
	return (
		<main className={styles.main}>
			<Header />
			<Greetings />
			<About />
			<Education />
			<Experience />
			<Knowledge />
			<Contact />
			<Footer />
		</main>
	);
}

export default App;
