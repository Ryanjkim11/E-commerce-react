import React from 'react';
import Book from './ui/Book';
import { books, data } from '../data'

const Featured = () => {
	console.log(books); 
	console.log(); 
	function getFiveStarBooks() {
	}
	return (
		<section id="features">
			<div className="container">
				<div className="row">
					<h2 className="section__title">
						Featured <div className="purple">Books</div>
					</h2>
					<div className="books">
						{books
							.filter((book) => book.rating === 5)
							.slice(0,4)
							.map((book) => (
								<Book book={book} key={book.id}/>
							))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Featured;
