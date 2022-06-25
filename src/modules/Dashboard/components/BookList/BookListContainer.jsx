import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions';
import BookList from './BookList';

const BookListContainer = ({ getAllBooks, books }) => {

    useEffect(() => {
        if (books.length <= 0) {
          getAllBooks()
            .catch(() => {
              alert('Something want to wrong ! ');
            });
        }
      }, []);

    return (
        <div>
            <BookList />
        </div>
    )
}


const mapStateToProps = (state) => ({
    books: state.dashboard.books
});

const mapDispatchToProps = (dispatch) => ({
    getAllBooks: () => dispatch(actions.getAllBooks()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(withRouter(BookListContainer));