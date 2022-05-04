import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, desc, imgURL, newsURl,author,publishedAt } = this.props;
    return (
      <div
        className="card"
        style={{
          height: "25em",
          overflow: "auto",
          boxShadow: "0px 0px 13px 1px rgba(0,0,0,1)",
        }}
      >
        <img src={imgURL} className="card-img-top" alt={title} height="200" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p class="card-text"><small class="text-muted">By {author} at {new Date(publishedAt).toString()}</small></p>
          <p className="card-text">{desc}</p>
          <a href={newsURl} target="_blank" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    );
  }
}
