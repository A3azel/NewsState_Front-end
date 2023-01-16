import React from "react";
import Button from '@mui/material/Button';
import { Colors } from './../Styles/customColors.js';

const SearchButton = () => {
return(
	<div>
	<Button variant="outlined" sx={{color:Colors.customWhite,borderColor:Colors.customWhite}}>Пошук</Button>
	</div>
	);
}
export default SearchButton;