import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import AdminPageSubmitFormButton from '../Material-UI/AdminSubmitFormButton';

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
});

class FilledTextFields extends React.Component {
  state = {
    projectName:'',
    date:'',
    tag:'',
    gitHubUrl:'',
    websiteUrl:'',
    description:''
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log('handling change');
    console.log(event.target.value);
  };

  handleClick = (event) => {
      console.log('form was submitted');
      event.preventDefault();
      this.props.dispatch( {type: 'ENTERED_NEW_PROJECT', payload: this.state } );
      this.state();
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          id="filled-required"
          label="Project Name"
          name="projectName"
          className={classes.textField}
          margin="normal"
          variant="filled"
          onChange={this.handleChange}
        />
        <TextField
          required
          id="filled-required"
          label="Date"
          name="date"
          className={classes.textField}
          margin="normal"
          variant="filled"
          onChange={this.handleChange}
        />
        <TextField
          required
          id="filled-required"
          label="Tag"
          name="tag"
          className={classes.textField}
          margin="normal"
          variant="filled"
          onChange={this.handleChange}
        />
        <TextField
          required
          id="filled-required"
          label="GitHub Url"
          name="gitHubUrl"
          className={classes.textField}
          margin="normal"
          variant="filled"
          onChange={this.handleChange}
        />
        <TextField
          required
          id="filled-required"
          label="Website Url"
          name="websiteUrl"
          className={classes.textField}
          margin="normal"
          variant="filled"
          onChange={this.handleChange}
        />
        <TextField
          id="filled-multiline-required"
          label="Description"
          name="description"
          rowsMax="4"
          value={this.state.multiline}
          onChange={() => this.handleChange('multiline')}
          className={classes.textField}
          margin="normal"
          variant="filled"
        />
        <AdminPageSubmitFormButton onClick={this.handleClick}/>
      </form>
    );
  }
}

FilledTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(FilledTextFields));