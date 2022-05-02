import React, { Component } from "react";
import { NewsItem } from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <>
        <div>News Container</div>
        <NewsItem />
      </>
    );
  }
}
