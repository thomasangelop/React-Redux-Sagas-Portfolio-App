//imports for stuff on the page that is being used
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import tileData from './tileData';
import { connect } from 'react-redux';

//setup redux state for global usage of information 
const mapReduxStateToProps = reduxState => ({
  reduxState
});

//styles preferences for material ui
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
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
    <pre>{JSON.stringify(this.props.reduxState)}</pre>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Project Name</ListSubheader><ListSubheader component="div">Action</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            {/* <img src={tile.img} alt={tile.title} /> */}
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <DeleteOutlinedIcon className={classes.icon} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapReduxStateToProps)(withStyles(styles)(TitlebarGridList));