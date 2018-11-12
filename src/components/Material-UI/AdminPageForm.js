import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';



const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class FilledTextFields extends React.Component {
  state = {
    name:'',
    description:'',
    website:'',
    github:'',
    date_completed:'',
    tag_id:''
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log('new tag', this.state.tag_id);
    
  };

  handleClick = () => {
      console.log('form was submitted');
      this.props.dispatch( {type: 'ADD_PROJECT', payload: this.state } );
      //clear state
      this.setState({
        name:'',
        description:'',
        website:'',
        github:'',
        date_completed:'',
        tag_id:''
      });
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          id="filled-required"
          label="Project Name"
          value={this.state.name}
          name="name"
          className={classes.textField}
          margin="normal"
          variant="filled"
          onChange={this.handleChange}
        />
        <TextField
          required
          id="filled-required"
          label=""
          type="date"
          defaultValue="2017-05-24"
          value={this.state.date_completed}
          name="date_completed"
          className={classes.container}
          margin="normal"
          variant="filled"
          onChange={this.handleChange}
        />
        {/* <TextField
          required
          id="filled-required"
          label="Tag ID"
          type="number"
          value={this.state.tag_id}
          name="tag_id"
          className={classes.textField}
          margin="normal"
          variant="filled"
          onChange={this.handleChange}
        /> */}
        <Select
            required
            id="filled-required"
            value={this.state.tag_id}
            name="tag_id"
            className={classes.select}
            onChange={this.handleChange}
            label="Tag"
          >
            <MenuItem onChange={this.handleChange} name="tag_id" value="1">React</MenuItem>
            <MenuItem onChange={this.handleChange} name="tag_id" value="2">jQuery</MenuItem>
            <MenuItem onChange={this.handleChange} name="tag_id" value="3">Node</MenuItem>
            <MenuItem onChange={this.handleChange} name="tag_id" value="4">SQL</MenuItem>
            <MenuItem onChange={this.handleChange} name="tag_id" value="5">Redux</MenuItem>
            <MenuItem onChange={this.handleChange} name="tag_id" value="6">HTML</MenuItem>
          </Select>
        <TextField
          required
          id="filled-required"
          label="GitHub Link"
          value={this.state.github}
          name="github"
          className={classes.textField}
          margin="normal"
          variant="filled"
          onChange={this.handleChange}
        />
        <TextField
          required
          id="filled-required"
          label="Website Link"
          value={this.state.website}
          name="website"
          className={classes.textField}
          margin="normal"
          variant="filled"
          onChange={this.handleChange}
        />
        <TextField
          required
          id="filled-multiline-required"
          label="Description"
          value={this.state.description}
          name="description"
          rowsMax="4"
          onChange={this.handleChange}
          className={classes.textField}
          margin="normal"
          variant="filled"
        />

        <Button 
            color="primary" 
            className={classes.button} 
            onClick={this.handleClick}
            name="submit"
            label="Submit"
            margin="normal"
        >
            Submit
        </Button>
      </form>
    );
  }
}

FilledTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(FilledTextFields));