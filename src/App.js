import React, { useState, useEffect, Fragment } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Counter from "./components/Counter";
import friends from "./friends.json";
import Navbar from "./components/Navbar/Navbar.jsx";
import isEmpty from "./utils/isEmpty.js";
import {
	MDBModal,
	MDBModalBody,
	MDBModalHeader,
	MDBModalFooter
} from "mdbreact";

import "./App.css";

const App = () => {
	const [correctGuesses, setCorrectGuesses] = useState(0);
	const [winStreak, setWinStreak] = useState(0);
	const [friendArr, setFriendArr] = useState([]);
	const [modal, setModal] = useState(false);

	// assign json array to component state on load
	useEffect(() => {
		setFriendArr([...friends])
	}, []);

	// if the user guesses them all correctly bring up winning modal
	useEffect(() => {
		// if correct guesses is divisible by 12
		if (correctGuesses === 12) {
			// open win modal
			setModal(true);
			// set win streak
			setWinStreak(winStreak + 1);

			// reset the friend array clicked paremeter to false
			for (let i = 0; i < friendArr.length; i++) {
				friendArr[i].clicked = false;
			}
		}

	}, [correctGuesses])
	const setClicked = (id) => {

		const clickedMatch = friendArr.filter(match => match.id === id);

		if (clickedMatch[0].clicked === true) {
			// set game over to true
			setModal(true);

			// reset all friends clicked booleans to false
			for (let i = 0; i < friendArr.length; i++) {
				friendArr[i].clicked = false;
			}

			// randomize the friend cards
			friendArr.sort(function (a, b) { return 0.5 - Math.random() });
		}
		else if (clickedMatch[0].clicked === false) {

			// set clicked to true for assigned friend
			clickedMatch[0].clicked = true;

			// make sure guesses are not over the amount of friends listed and then add count
			if (correctGuesses < 12) {
				setCorrectGuesses(correctGuesses + 1);
			}

			if (correctGuesses === 12) {
				setModal(true);
			}

			// randomize the friend cards
			friendArr.sort(function (a, b) { return 0.5 - Math.random() });
		}
	};

	const renderFriends = () => {
		if (!isEmpty(friendArr)) {
			return Object.values(friendArr).map((friend, i) => {
				return <div key={i + 1}>
					<FriendCard
						id={friend.id}
						key={friend.id}
						image={friend.image}
						setClicked={setClicked}
					/>
				</div>
			})
		}
	}
	// function to toggle the modal's state
	const closeModal = () => {
		setModal(false);
	}

	// render different text according to the score count
	const renderModalText = () => {
		if (correctGuesses === 12) {
			return <p className="loseModalHeader">YOU WIN!!</p>
		}
		else if (correctGuesses >= 11) {
			return <p className="loseModalHeader">SO CLOSE!</p>
		} else {
			return <p className="loseModalHeader">BETTER LUCK NEXT TIME!</p>
		}
	}

	return (
		<Fragment>
			<Navbar />
			<Wrapper>
				<Counter score={correctGuesses} winStreak={winStreak} />
			</Wrapper>
			<Wrapper>
				{renderFriends()}
			</Wrapper>
			<MDBModal isOpen={modal} backdrop={false} toggle={closeModal}>
				<MDBModalHeader>{renderModalText()}</MDBModalHeader>
				<MDBModalBody>
					<p><span className="scoreText">YOUR SCORE:</span> {correctGuesses}/12</p>
					<p><span className="scoreText">YOUR WIN STREAK:</span> {winStreak}</p>
				</MDBModalBody>
				<MDBModalFooter id="loseModalFooter">
					<button className="buttons" onClick={() => {
						closeModal();
						setWinStreak(0);
						setCorrectGuesses(0);
					}}>QUIT</button>
					<button className="buttons" onClick={() => {
						closeModal();
						setCorrectGuesses(0);
					}}>KEEP GOING</button>
				</MDBModalFooter>
			</MDBModal>
		</Fragment>
	)
}

export default App;