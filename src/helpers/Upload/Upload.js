import React from 'react'
import { Upload, message } from 'antd';
import './Upload.scss'
import AvatarImage from '@material-ui/icons/Face';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type==='image/svg';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng;
}

export default class Avatar extends React.Component {
  state = {
    loading: false,
    FileList:[],
    imageChanged:false
  };

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {

      this.setState({FileList:info})
      
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
          imageChanged:true
        }),
      );
    }
    this.props.IMageChange(this.state.FileList,this.state.imageChanged,this.state.imageUrl)
  };
  componentDidMount(){
      //  if(this.props.imageChanged){
      this.setState({FileList:this.props.FileList,imageChanged:this.state.imageChanged})
      //  }
  }
  render() {
    const { loading, imageUrl } = this.state;
    console.log("imageUrl",this.state.FileList)

    const uploadButton = (
      <div>
        {/* {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div> */}
        <AvatarImage className="avatar_img"/>
      </div>
    );
    return (
        <div className="uploads">
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
        // fileList={this.state.FileList}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
      </div>
    );
  }
}
