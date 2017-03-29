import React from 'react';
import { Editor, EditorState } from 'draft-js';

import './myEditor.css';

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};

    this.focus = () => this.refs.editor.focus();

    this.onChange = (editorState) => this._onChange(editorState);
  }

  _onChange(editorState) {
    // let contentState = this.state.editorState.getCurrentContent();
    // if (contentState.getBlockMap().size > 4) {
    //   this.props.onLinePull();
    //   this.refs.editor.blur();
    // } else {
    //   this.setState({editorState});
    // }
    this.setState({editorState});
  }

  render() {
    return (
      <div className="RichEditor-root">
        <div className="RichEditor-editor" onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            placeholder="Tell a story..."
            ref="editor"
          />
        </div>
      </div>
    );
  }
}

export default MyEditor;
