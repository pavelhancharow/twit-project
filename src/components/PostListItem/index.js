import React, { Component } from 'react';

import './post-list-item.sass';

export default class PostListItem extends Component {
  state = {
    important: false,
    like: false
  }

  onImportant = () => {
    this.setState(({ important }) => ({
      important: !important
    }))
  }

  onLike = () => {
    this.setState(({ like }) => ({
      like: !like
    }))
  }

  render() {
    const { label } = this.props
    const { important, like } = this.state

    let classNames = "app-list-item d-flex justify-content-between"
    classNames += important ? ' important' : ''
    classNames += like ? ' like' : ''

    return (
      <div className={classNames}>
        <span className="app-list-item-label" onDoubleClick={this.onLike}>
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn-star btn-sm" onClick={this.onImportant}>
            <i className="fa fa-star"></i>
          </button>
          <button className="btn-trash btn-sm">
            <i className="fa fa-trash-o"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </div>
    )
  }
}