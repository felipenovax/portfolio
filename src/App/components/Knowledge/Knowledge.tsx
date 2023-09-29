import React from 'react';
import styles from './Knowledge.module.scss';
import { stacks } from './Knowledge.const';
// import { getStorage, listAll, ref } from 'firebase/storage';

export const Knowledge = () => {
	// const storage = getStorage();
	// const listRef = ref(storage, 'stacks');
	//   listAll(listRef)
	// .then((res) => {
	//   res.items.forEach((itemRef) => {
	//     console.log(`https://firebasestorage.googleapis.com/v0/b/portfolio-144b5.appspot.com/o/stacks%2F${itemRef.name}?alt=media&token=${process.env.REACT_APP_FIREBASE}`)
	//   });
	// }).catch((error) => {
	//   // Uh-oh, an error occurred!
	// });

	return (
		<div className={styles.knowledge}>
			<div className={styles.polygon} />
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<div className={styles.sliderWrapper}>
						<div className={styles.itemsHolder}>
							<div className="items">
								{stacks.map((stack, index) => (
									<img
										key={index}
										src={stack.icon}
										alt={stack.name}
										className={styles.item}
									/>
								))}
							</div>
							<div className={styles.items}>
								{stacks.map((stack, index) => (
									<img
										key={index}
										src={stack.icon}
										alt={stack.name}
										className={styles.item}
									/>
								))}
							</div>
						</div>
					</div>
					<section className={styles.section}>Ola mundo</section>
				</div>
			</div>
			<div className={styles.polygonInverted} />
		</div>
	);
};
