import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  isLiked: PropTypes.bool,
  likesCount: PropTypes.number,
  author: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  handleLikeClick: PropTypes.func.isRequired,
};

const defaultProps = {
  description: 'No description',
  isLiked: false,
  likesCount: 0,
};

const ItemDetail = ({
  id,
  title,
  description,
  imageUrl,
  isLiked,
  likesCount,
  author,
  handleLikeClick,
}) => (
  <article className="item item--detail">

    <div className="item__metadata">
      <a href="#r/item-author" className="item__avatar">
        <img src={author.avatarUrl} alt={`${author.name}'s avatar`} />
      </a>

      <div className="item__data">
        <h1 className="item__title">{ title }</h1>
        <h2 className="item__author">By <a href="#r/item-author">{ author.name }</a></h2>
      </div>
    </div>

    <div className="item__content">
      <img src={imageUrl} alt="" className="item__image" />
    </div>

    <p className="item__description">{description}</p>

    <div className="item__actions">
      <a
        href="#r/item-like"
        className={classnames({
          item__action: true,
          item__like: true,
          'is-liked': isLiked,
        })}
        onClick={() => handleLikeClick(id)}
      >
        <span className="icon icon--like" /><span className="item__counter">{ ` ${likesCount}` }</span>
      </a>
      <a href="#r/item-options" className="item__action item__options">
        <span className="icon icon--options">More items</span>
      </a>
    </div>
  </article>
);

ItemDetail.propTypes = propTypes;
ItemDetail.defaultProps = defaultProps;

export default ItemDetail;
