import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

export class News extends Component {
  static propTypes = {

  }

  constructor() {
    super()
    this.state = {
      allArticles: [],
      loading: true,
      page: 1
    }
  }

  async componentDidMount() {
    let mainurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`
    let data = await fetch(mainurl)
    let convertedData = await data.json()
    this.setState(
      {
        allArticles: convertedData.articles,
        totalResults: convertedData.totalResults,  //totalResults : 38
      }
    )

  }

  handlePrevClick = async () => {
    let mainurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    let data = await fetch(mainurl)
    let convertedData = await data.json()
    this.setState(
      {
        allArticles: convertedData.articles,
        page: this.state.page - 1
      }
    )
  }

  handleNextClick = async () => {
    let mainurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    let data = await fetch(mainurl)
    let convertedData = await data.json()
    this.setState(
      {
        allArticles: convertedData.articles,
        page: this.state.page + 1
      }
    )

    document.body.style.backgroundColor = 'black'
  }


  render() {
    return (
      <div className="container my-5">
        <h2  style={{ color: 'white' ,  marginTop : '70px' }}>NewsMonke - Top Headlines{this.props.what} </h2>

        {/* { this.state.loading==true && <Spinner/>} */}
        <div className="row mt-4">
          {this.state.allArticles.map(element => {
            return <div className="col-md-4  mb-5" key={element.url}>
              <NewsItem title={element.title}
                desc={element.description == null ? "" : element.description.slice(0, 150)}
                imageurl={element.urlToImage == null ? "https://www.sammobile.com/wp-content/uploads/2023/02/Samsung-Galaxy-Book-3-Pro-1.jpg" : element.urlToImage}
                fullurl={element.url}
                author={element.author}
                publishedAt={element.publishedAt} />
            </div>
          })}
        </div>
        <div className='d-flex justify-content-between mb-5'>
          <button type="button" className="btn btn-light" onClick={this.handlePrevClick}
            disabled={this.state.page <= 1}>
            Previous</button>
          <button type="button" className="btn btn-light" onClick={this.handleNextClick}
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}>
            Next</button>
        </div>
      </div>
    )
  }
}

export default News
