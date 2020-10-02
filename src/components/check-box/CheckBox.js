/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { chooseCheckBox, setLevel } from '../../redux/filter/filter.actions';
import {
	resetVisitedAndSP,
	findPath,
	addWalls,
} from '../../redux/grid/grid.actions';
import {
	PlayOptionContainer, OptionCheckBox, OptionCheckBoxContainer, OptionCheckBoxInput, OptionCheckBoxButton,
} from './CheckBox.styles';
import ModalTimer from '../modal/Modal';

function PlayOption() {
	const [checked, setChecked] = useState(false);
	const [open, setOpen] = useState(false);
	const [idCheckBox, setIdCheckBox] = useState(0);
	const [gameLevel, setGameLevel] = useState(1);

	const filter = useSelector(state => state.filter);
	const { algorithms, endGame } = filter;

	const grid = useSelector(state => state.grid);
	const { rows } = grid;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setLevel(gameLevel));
	}, [gameLevel, dispatch]);

	const handleLevel = () => {
		setGameLevel(gameLevel + 1);
	};

	const autoPlay = () => {
		if (rows < 13) {
			setTimeout(() => {
				setOpen(false);
			}, 2000);
			const interval = setInterval(() => {
				if (endGame) {
					return () => clearInterval(interval);
				}
				setGameLevel(gameLevel => gameLevel + 1);
				dispatch(addWalls());
				dispatch(resetVisitedAndSP());
				dispatch(findPath());
			}, 2000);
			return () => clearInterval(interval);
		} if (rows < 16) {
			setTimeout(() => {
				setOpen(false);
			}, 3000);
			const interval = setInterval(() => {
				if (endGame) {
					return () => clearInterval(interval);
				}
				setGameLevel(gameLevel => gameLevel + 1);
				dispatch(addWalls());
				dispatch(resetVisitedAndSP());
				dispatch(findPath());
			}, 3000);
			return () => clearInterval(interval);
		}
		setTimeout(() => {
			setOpen(false);
		}, 4500);
		const interval = setInterval(() => {
			if (endGame) {
				return () => clearInterval(interval);
			}
			setGameLevel(gameLevel => gameLevel + 1);
			dispatch(addWalls());
			dispatch(resetVisitedAndSP());
			dispatch(findPath());
		}, 4500);
		return () => clearInterval(interval);
	};

	const playBtn = () => {
		dispatch(resetVisitedAndSP());
		dispatch(findPath(false));
	};

	const nextBtn = () => {
		dispatch(addWalls());
		dispatch(resetVisitedAndSP());
		dispatch(findPath(false));
		handleLevel();
	};

	useEffect(() => {
		dispatch(chooseCheckBox(idCheckBox, checked));
	}, [checked, idCheckBox, dispatch]);

	return (
		<PlayOptionContainer>
			<OptionCheckBox>
				{algorithms?.map(algo => (
					<OptionCheckBoxContainer key={algo.id}>
						<OptionCheckBoxInput
							type="checkbox"
							id={algo.id}
							name={algo.name}
							value={algo.id}
							onClick={() => {
								setChecked(!checked);
								setIdCheckBox(algo.id);
							}}
						/>
						<label htmlFor={algo.id}>{algo.name}</label>
					</OptionCheckBoxContainer>
				))}
			</OptionCheckBox>
			<OptionCheckBoxButton>
				<Button
					disabled={!algorithms[0].checked && !algorithms[1].checked &&
            !algorithms[2].checked}
					style={{ marginBottom: '15px' }}
					variant="contained"
					color="primary"
					type="submit"
					onClick={playBtn}
				>
					Play / Repeat
				</Button>
				<Button
					disabled={!algorithms[0].checked && !algorithms[1].checked &&
            !algorithms[2].checked}
					style={{ marginBottom: '15px' }}
					variant="contained"
					color="primary"
					type="submit"
					onClick={nextBtn}
				>
					Next
				</Button>
				<Button
					disabled={!algorithms[0].checked && !algorithms[1].checked &&
            !algorithms[2].checked}
					style={{ marginBottom: '15px' }}
					variant="contained"
					color="primary"
					onClick={() => {
						autoPlay();
						setOpen(true);
					}}
				>
					Auto Play
				</Button>
				<ModalTimer open={open} setOpen={setOpen} />
			</OptionCheckBoxButton>
		</PlayOptionContainer>
	);
}

export default PlayOption;
