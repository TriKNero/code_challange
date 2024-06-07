import React, { Component } from 'react';
import Folder from './Folder.jsx';
import File from './File.jsx';

class Browser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      data: props.data,
    };
  }

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  filterData = (data, query) => {
    if (!query) return data;

    return data.reduce((acc, item) => {
      if (item.type === 'FILE' && item.name.toLowerCase().includes(query.toLowerCase())) {
        acc.push(item);
      } else if (item.type === 'FOLDER') {
        const children = this.filterData(item.children, query);
        if (children.length > 0) acc.push({ ...item, children });
      }
      return acc;
    }, []);
  };

  render() {
    const { searchQuery, data } = this.state;
    const filteredData = this.filterData(data, searchQuery);

    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={this.handleSearchChange}
        />
        <div>
          {filteredData.map((item, index) => {
            const { name, children, mimeType, type } = item || {}
            const key = `${index}-${item.name}`;
            if (type === 'FOLDER') {
              return (
                <Folder
                  key={key}
                  name={name}
                  children={children}
                  path={`/${name}`}
                />
              );
            }
            return (
              <File
                key={key}
                name={name}
                mimeType={mimeType}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Browser;
