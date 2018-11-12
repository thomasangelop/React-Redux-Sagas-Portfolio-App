//imports for stuff on the page that is being used
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { connect } from 'react-redux';

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
    color: 'rgba(255, 255, 255, 0.54)',
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

  render() {
    const { classes } = this.props;

  return (
    <div className={classes.root}>
    {/* using grid to display projects from database */}
    {/* <pre>{JSON.stringify(this.props.reduxState)}</pre> */}
      <div>
          {this.props.reduxState.projects.map(projects => 
          <Paper className={classes.root} key={projects.id}>
          <Grid container spacing={16}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={projects.thumbnail} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={16}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {projects.name}
                  </Typography>
                  <Typography gutterBottom>{projects.description}</Typography>
                  <Typography type="link" onClick={()=> window.open(`${projects.website}`, "_blank")} gutterBottom>{projects.website}</Typography>
                  <Typography onClick={()=> window.open(`${projects.github}`, "_blank")} gutterBottom>{projects.github}</Typography>
                  <Typography gutterBottom>{projects.date_completed}</Typography>
                  <Typography color="textSecondary">Tag: {projects.tag_id}</Typography>
                </Grid>
                {/* <Grid item>
                  <Typography style={{ cursor: 'pointer' }}>Sample Button</Typography>
                </Grid> */}
              </Grid>
              {/* <Grid item>
                <Typography variant="subtitle1">Sample text</Typography>
              </Grid> */}
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