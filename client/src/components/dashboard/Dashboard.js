import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';

const Dashboard = ({getCurrentProfile, user, profile, loading}) => {
  useEffect(() => {
    getCurrentProfile();
  },[getCurrentProfile])

  return (
    loading && profile === null 
    ? <Spinner /> 
    : <Fragment>
      <h1 className="large text-primary">Dashboard</h1> 
      <p className="lead">
        <i className="fas fa-user"></i>{' '}
        Welcome {user && user.name}
      </p>
      {profile !== null ? 
        <Fragment>Has Profile</Fragment> :
        <Fragment>
          <p>You have not yet setup a profile. Please add some info</p>
          <Link to='/creat-profile' className="btn btn-primary my-1" > Create Profile</Link>
        </Fragment>
      }
    </Fragment>
  )
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  user: state.auth.user,
  profile: state.profile.profile,
  loading: state.profile.loading
})

export default connect(mapStateToProps, {getCurrentProfile})(Dashboard);
