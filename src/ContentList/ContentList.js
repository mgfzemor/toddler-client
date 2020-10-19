
import React, {Component} from "react"
import ContentItem from "./ContentItem"
import ContentForm from './ContentForm'

const api_url = "http://localhost:3001/api/v1/contents"


class ContentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contents: []
    }
  }

  // This will be executed afet constructor method.
  componentDidMount() {
    this.getContents();
  }

  getContents() {
    fetch(api_url)
    .then(response => response.json())
    .then(response_contents => {
      this.setState({
        contents: response_contents
      })
    });
  }

  render() {
    return (
      <div>
      {/*  <ContentForm api_url={this.api_url}/> */}
          {this.state.contents.map((content) => (
            <ContentItem key={content.id} content={content} />
          ))}
      </div>
    )
  }
}

export default ContentList;
