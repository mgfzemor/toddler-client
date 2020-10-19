import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class ContentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      api_url: props.api_url,
      title: "",
      description: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.formSubmit(event.target);
  }

  handleContentChange() {
    
  }

  async formSubmit(formData) {

  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} id="content_form" autoComplete="off">
          <TextField
            id="content_title"
            label="Content Title"
            type="text"
            variant="outlined"
            name="content[title]"
            onChange={this.handleContentChange}
          />

          <TextField
            id="content_description"
            label="Content Description"
            multiline
            rows={4}
            variant="outlined"
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"> Add Content </Button>
        </form>
      </div>
    )
  }
}

export default ContentForm;
