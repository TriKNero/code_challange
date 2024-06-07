import React, { Component } from 'react';
import File from './File.jsx';

class Folder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  toggleCollapse = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  renderFolderItem(child, index) {
    const { path } = this.props;
    const { name, type, children, mime } = child || {}
    if (type === 'FOLDER') {
      return (
        <Folder
          key={`${index}${name}`}
          name={name}
          children={children}
          path={`${path}/${name}`}
        />
      );
    }
    if (type === 'FILE') {
      return (
        <File
          key={index}
          name={name}
          mimeType={mime}
        />
      );
    }
    return null;
  }

  render() {
    const { name, children } = this.props;
    const { collapsed } = this.state;

    return (
      <div>
        <div onClick={this.toggleCollapse} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
          {collapsed ? '+' : '-'} {name}
        </div>
        {!collapsed && (
          <div style={{ paddingLeft: '20px' }}>
            {children.map((child, index) => this.renderFolderItem(child, index))}
          </div>
        )}
      </div>
    );
  }
}

export default Folder;
