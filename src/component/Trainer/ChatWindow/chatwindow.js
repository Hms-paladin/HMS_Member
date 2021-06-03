import React, {Component} from 'react'
import {Launcher} from 'react-chat-window'
 import nurse from '../../../images/trainer.png'
 import './chatwindow.scss'
export default class ChatWindow extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      messageList: [
        {type: 'text', author: 'me', data: { text: "hai"} },
  {type: 'text', author: 'them', data: { text: 'good morning'} },
  {type: 'text', author: 'them', data: { text: 'send the video for fitness' }},
  {type: 'text', author: 'me', data: { text: 'ok.i will send'} },
  // {type: 'file', author: 'them',data: { text: 'ok.i will send'}},
  {type: 'file', author: 'me',
    data: {
      url: nurse,
      fileName: 'trainer.png',
    }},
    ],
    isOpen: false
    };
  }
 
  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    })
  }
 
  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
    }
  }
 
  _handleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
      newMessagesCount: 0
    });
  }
  _onFilesSelected(fileList) {
    const objectURL = window.URL.createObjectURL(fileList[0]);
    this.setState({
      messageList: [...this.state.messageList, {
        type: 'file', author: 'me',
        data: {
          url: objectURL,
          fileName: fileList[0].name
        }
      }]
    });
  }
  render() {
    return (<div>
      <Launcher
        agentProfile={{
         teamName: 'Chat',
          // imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
        onFilesSelected={this._onFilesSelected.bind(this)}
        showEmoji={true}
        handleClick={this._handleClick.bind(this)}
        isOpen={this.state.isOpen}
        Footer={false}
      />
      {/* <img className="demo-monster-img" src={nurse} /> */}
    </div>)
  }
}