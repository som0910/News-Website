import React, { Component } from 'react'
import PropTypes from 'prop-types'

const NewsItem = (props) => {
    // let {title, desc, imageurl, fullurl} = this.props
    return (
      <div>
        <div className="card" >
          <img src={props.imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.desc}</p>
              <a href={props.fullurl} target="_blank" className="btn btn-dark">Read More </a>
              <p className="mt-2 mb-0"> Source : {props.author} </p>
              <p className="mb-1"> { (new Date(props.publishedAt)).toGMTString() } </p>
            </div>
        </div>
      </div>
    )
}

export default NewsItem
