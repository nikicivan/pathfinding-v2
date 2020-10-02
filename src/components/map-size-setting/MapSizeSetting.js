/* eslint-disable react/prop-types */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeColumns, changeRows } from '../../redux/grid/grid.actions';
import {
	MapSizeContainer, MapSizeInput, MapSizeButton, MapSizeForm,
} from './MapSize.styles';

const MapSizeSetting = ({ setIsActive }) => {
	const [row, setRow] = useState(10);
	const [column, setColumn] = useState(10);

	const dispatch = useDispatch();

	const handleMapSize = (e) => {
		e.preventDefault();
		if (row >= 10) {
			if (row <= 20) {
				if (column >= 10 && column === row) {
					if (column <= 20 && row === column) {
						dispatch(changeRows(row));
						dispatch(changeColumns(column));
						setRow('');
					} else {
						alert('Y value must be equal or less then 20 and equal with X');
					}
				} else {
					alert('Y value must be equal or grather then 10 and equal with X');
				}
			} else {
				alert('X value must be equal or less then 20');
			}
		} else {
			alert('X value must be equal or grather then 10');
		}
	};

	return (
		<MapSizeContainer style={{ marginRight: '1rem', marginTop: '1rem' }}>
			<MapSizeForm onSubmit={handleMapSize}>
				<MapSizeInput
					onChange={(e) => { setRow(e.target.value); setColumn(e.target.value); }}
					type="number"
					placeholder="Map length"
					value={row}
				/>
				<MapSizeButton className="buttonMap" type="submit" onClick={() => setIsActive(false)} variant="contained" color="primary">
					Change
				</MapSizeButton>
			</MapSizeForm>
		</MapSizeContainer>
	);
};

export default MapSizeSetting;
