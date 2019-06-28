import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import Spinner from '../layout/Spinner';

const Posts = ({ getPosts, posts, loading }) => {
  useEffect(() => {
    getPosts()
  }, [getPosts])
  return (
    <div>

    </div>
  )
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}
const mapStateToProps = state => ({
  posts: state.post,
  loading: state.post.loading
})

export default connect(mapStateToProps, { getPosts })(Posts);
