import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  isLiked: PropTypes.bool,
  likesCount: PropTypes.number,
  author: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

const defaultProps = {
  isLiked: false,
  likesCount: 0,
};

const Item = ({
  id,
  title,
  imageUrl,
  isLiked,
  likesCount,
  author,
}) => (
  <article className="item item--preview">
    <div className="item__content">
      <img src={imageUrl} alt="" className="item__image" />
    </div>

    <div className="item__actions">
      <a
        href="#r/item-like"
        className={classnames({
          item__action: true,
          item__like: true,
          'is-liked': isLiked,
        })}
      >
        <span className="icon icon--like" /><span className="item__counter">{ ` ${likesCount}` }</span>
      </a>
      <a href="#r/item-options" className="item__action item__options">
        <span className="icon icon--options">More items</span>
      </a>
    </div>

    <div className="item__metadata">
      <a href="#r/item-author" className="item__avatar">
        <img src={author.avatarUrl} alt={`${author.name}'s avatar`} />
      </a>

      <div className="item__data">
        <h1 className="item__title"><a href="#r/item-detail">{ title }</a></h1>
        <h2 className="item__author">By <a href="#r/item-author">{ author.name }</a></h2>
      </div>
    </div>

  </article>
);

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;

export default Item;
