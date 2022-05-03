import React, { Component } from "react";
import { NewsItem } from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let data = await fetch(
      `https://newsapi.org/v2/everything?q=${this.props.tag}&apiKey=07d673cfec874afda8fb694c94d67ae6&page=${this.state.page}&pageSize=21`
    );
    data = await data.json();
    this.setState({ articles: data.articles });
  }

  previous = async () => {
    let data = await fetch(
      `https://newsapi.org/v2/everything?q=${
        this.props.tag
      }&apiKey=07d673cfec874afda8fb694c94d67ae6&page=${this.state.page - 1}&pageSize=21`
    );
    data = await data.json();
    this.setState({ articles: data.articles, page: this.state.page - 1 });
  };
  next = async () => {
    let data = await fetch(
      `https://newsapi.org/v2/everything?q=${
        this.props.tag
      }&apiKey=07d673cfec874afda8fb694c94d67ae6&page=${this.state.page + 1}&pageSize=21`
    );
    data = await data.json();
    this.setState({ articles: data.articles, page: this.state.page + 1 });
  };

  render() {
    return (
      <div className="container">
        <h5 className="my-3 text-center">NewsMonkey Top-Headlines</h5>
        <div className="row">
          {this.state.articles.map((newsItem) => {
            return (
              <div className="col-lg-4 my-3">
                {" "}
                <NewsItem
                  title={newsItem.title}
                  desc={newsItem.description}
                  imgURL={newsItem.urlToImage}
                  newsURl={newsItem.url}
                />
              </div>
            );
          })}
        </div>
        <button
          className="btn btn-primary"
          onClick={this.props.changeTag("china")}
        >
          Tag
        </button>
        <div className="container d-flex justify-content-between my-3">
          <button
            className="btn btn-dark"
            disabled={this.state.page <= 1}
            onClick={this.previous}
          >
            &#8592; Previous
          </button>
          <h4>{this.state.page}</h4>
          <button className="btn btn-dark mx-2" disabled={this.state.page===4} onClick={this.next}>
            Next &#8594;
          </button>
        </div>
      </div>
    );
  }
}
