import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Elastik from './elastik.png';
import {TextField, InputBase, Typography, Button, NativeSelect} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


import Input from './Input.js'
import './App.css'


const useStyles = makeStyles((theme) => ({
	root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  modal: {
    display: 'block',
  	marginLeft: 'auto',
  	marginRight: 'auto',
  	width: '40%',
  },
  formControlLabel: { fontSize: '0.6rem', 
   '& label': { fontSize: '0.6rem' },
   	marginBottom: '5px',
    },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  image:{
  	display: 'block',
  	marginLeft: 'auto',
  	marginRight: 'auto',
  	width: '25%',
  	height: '80px',
  	marginBottom:'20px',
  },
  textfield:{
  	border: '1px gray solid',
  	width: '100%',
  	height: '5vh',
  	fontSize: '0.8em',
  	marginRight: '10px',
  	'&::placeholder': {
      marginLeft: '10px',
    },

  },
  title:{
  	marginBottom: '5px',
  },
  inputSection:{
  	marginRight: '10px',
  	marginBottom: '20px',
  },
  option: {
    '&::placeholder': {
      marginLeft: '10px',
    },
    '&::label': {
      fontSize: '0.6em',
    },
  },
  input:{
  	
  	width: '100%',
  	marginTop: '10px',
  	'&::placeholder': {
	fontSize: '0.8em',
	marginTop: '20px',    
},
  },
  info:{
  	fontSize: "0.6em",
  	color: 'gray',
  	marginTop: '3px',
  },
  button:{
  	textTransform: 'none',
  	backgroundColor: '#fdee00',
  	color: 'black',
  	fontWeight: 'bold',
  	display: 'block',
  	marginLeft: 'auto',
  	marginRight: 'auto',
  	width: '30%',
  	  },
  papers: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
},}
));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState('contribute');

  const handleChange = (event) => {
    setValue(event.target.value);
  };



  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Action
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <img src={Elastik} className={classes.image}/>
            <Grid container >
	            <Grid item md={5} className={classes.inputSection}> 
	            	<div className={classes.title}>Name</div>
			        <InputBase
				     placeholder={"Type your name here"}
				     type={"name"}
				     required={true}
					 variant="outlined-basic"				     
					 fullWidth={true}
					 className={classes.textfield}
				     />		

			     </Grid>
			     <Grid item md={5} className={classes.inputSection}>
	            	<div className={classes.title}>Profession</div>
					<InputBase
					placeholder={"Choose your profession"}
				     type={"name"}
				     required={true}
				     fullWidth={true}
				     className={classes.textfield}

				     />	
				     	
				 </Grid>
				 <Grid item md={5} className={classes.inputSection}> 
	            	<div className={classes.title}>Linkedin/Github</div>
			        <InputBase
				     placeholder={"Paste Link Here"}
				     type={"name"}
				     required={true}
				     fullWidth={true}
				     className={classes.textfield}

				     />		

			     </Grid>
			     <Grid item md={5} className={classes.inputSection}>
	            	<div className={classes.title}>Avatar</div>
					<InputBase
				     type={"file"}
				     required={true}
				     fullWidth={true}
				     className={classes.textfield}
				     label="Click me to upload image"
				     />	
				     <div className={classes.info}>Maximum file is 3 MB</div>

				     			     
				 </Grid>
				 <Grid item md={5} className={classes.inputSection}>
	            	<div className={classes.title}>How do you want to contribute to the community</div>
					<FormControl component="fieldset" className={classes.title}>
				      <RadioGroup  aria-label="contribute" name="contribute" value={value} onChange={handleChange}>
				        <FormControlLabel 
				        	className={classes.option}
				        	value="Developer/Designer/Maker" 
				        	control={<Radio color="primary"/>} 
				        	label={<Typography className={classes.formControlLabel}>Developer/Designer/Maker</Typography>}
				        	 />
				        <FormControlLabel 
				        	className={classes.option} 
				        	value="Investor/Sponsor" 
				        	control={<Radio color="primary" />} 
				        	label={<Typography className={classes.formControlLabel}>Investor/Sponsor</Typography>}/>
				        <FormControlLabel 
				        className={classes.option}
				        value="I just love new ideas and want to vote" 
				        control={<Radio color="primary"/>} 
				        label={<Typography className={classes.formControlLabel}>I just love new ideas and ant to vote</Typography>}/>
				      </RadioGroup>
				    </FormControl>					     
				 </Grid>
				 <Grid item md={5} className={classes.inputSection}>
	            	<div className={classes.title}>About You</div>
					<TextField
					  id="outlined-multiline-static"
					  placeholder="Write your thoughts"
					  multiline
					  rows={4}
					  variant="outlined"
					  className={classes.input}
					   InputProps={{
					    classes: { input: classes.input}
					  }}
					/>			     
				 </Grid>
				 <Grid item md={5} className={classes.inputSection}>
	            	<div className={classes.title}>Enter ID</div>
					<InputBase
				     placeholder={"Enter your email id"}
				     type={"name"}
				     required={true}
				     fullWidth={true}
				     className={classes.textfield}

				     />					     
				 </Grid>
				 <Grid item md={5} className={classes.inputSection}> 
	            	<div className={classes.title}>Enter a password/Github</div>
			        <InputBase
				     placeholder={"****************"}
				     type={"password"}
				     required={true}
				     fullWidth={true}
				     className={classes.textfield}

				     />		
				     <div className={classes.info}>Minimum 8 characters including a special character</div>


			     </Grid>

			     <Button variant="contained" color="primary" className={classes.button}>
  					Create Account
				</Button>
			</Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

