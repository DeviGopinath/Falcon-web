import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';

const Filter = (props) => {
	const [value, setValue] = useState('');

	const onChangeHandler = (e) => {
		setValue(e.target.value);
	};

	useEffect(() => {
		props.onChangeFilter(value);
	}, [value]);

	return (
		<div>
			<InputLabel sx={{ marginLeft: 2 }} id='label'>
				Select state
			</InputLabel>
			<FormControl
				sx={{
					m: 1,
					minWidth: 120,
					bgcolor: '#ffff',
					border: 'none',
				}}
			>
				<Select value={value} onChange={onChangeHandler}>
					<MenuItem value='Andaman and Nicobar Islands'>
						Andaman and Nicobar Islands
					</MenuItem>
					<MenuItem value='Andhra Pradesh'>Andhra Pradesh</MenuItem>
					<MenuItem value='Assam'>Assam</MenuItem>
					<MenuItem value='Chandigarh'>Chandigarh</MenuItem>
					<MenuItem value='Chhattisgarh'>Chhattisgarh</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
};

export default Filter;
