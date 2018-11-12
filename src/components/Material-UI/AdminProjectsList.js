//imports for stuff on the page that is being used
import axios from 'axios';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { connect } from 'react-redux';

//import css styling for list class 
import './list.css';


//setup redux state for global usage of information 
const mapReduxStateToProps = reduxState => ({
  reduxState
});

//styles preferences for material ui
const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    padding: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 4,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  icon: {
    color: theme.palette.text.primary,
  },
});

 class TitlebarGridList extends React.Component{

  //when the page loads run this database call
  componentDidMount() {
     this.getProjects();
}

  //get the project list from the database 
  getProjects = () => {
    //Dispatch action to get the elements from the server 
    //This is picked up by watcherSaga in index.js
    this.props.dispatch ( { type: 'FETCH_PROJECTS', payload: this.state } );
  }

  //delete the project from the list and the database when button is clicked
  handleRemove = (id) => {
    console.log('deleteing project id:', id);
    axios({
      method: 'DELETE',
      url: `/api/projects/${id}`
    })
    .then( (response ) => {
      this.getProjects();
      console.log(`deleted project id: ${id} successfully`);
    })
    .catch( (error) => {
      console.log(`error deleting project id: ${id}`);
      
    })
  }

  render() {
    const { classes } = this.props;

  return (
    <div className={classes.root}>
    {/* using grid to display projects from database */}
      <div>
          {this.props.reduxState.projects.map(projects => 
          <Paper className={classes.root} key={projects.id}  class="list">
          <Grid container spacing={16}>
            <Grid item>
            <div>
              <Grid className={classes.image}>
              <img width={100} height={150} mode='fit' alt="project-img" src={require(`../../Images/${projects.thumbnail}`)} />
              </Grid>
            </div>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={16}>
                <Grid item xs>
                  <Typography variant="subtitle1" class="projectName">
                    {projects.name}
                  </Typography>
                  <Typography >{projects.description}</Typography>
                  <Button onClick={()=> window.open(`${projects.website}`, "_blank")}>{projects.website}</Button>
                  <Button onClick={()=> window.open(`${projects.github}`, "_blank")}>{projects.github}</Button>
                  <Typography>{projects.date_completed}</Typography>
                  <Typography color="textSecondary">Tag: {projects.tag_name}</Typography>
                </Grid>
                <IconButton className={classes.icon}>
                  <DeleteOutlinedIcon onClick={() => this.handleRemove(projects.id)} style={{ cursor: 'pointer' }} className={classes.icon} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        )}
      </div>
    </div>
  );
}
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapReduxStateToProps)(withStyles(styles)(TitlebarGridList));