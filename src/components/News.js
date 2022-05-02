import React, { Component } from "react";
import { NewsItem } from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount() {
      console.log(this.props.tag);
    let data = await fetch(
      `https://newsapi.org/v2/everything?q=${this.props.tag}&apiKey=07d673cfec874afda8fb694c94d67ae6`
    );
    data = await data.json();
    this.setState({ articles: data.articles });
  }
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
      </div>
    );
  }
}
