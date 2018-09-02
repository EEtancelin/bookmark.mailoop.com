import React, { Component } from 'react';
import './App.css';
import { Layout } from 'antd';


import { Row, Col } from 'antd';
import { Card, Icon, Avatar } from 'antd';
import Bookmark from './bookmark';
import Data from './data';
import { connectHits } from 'react-instantsearch-core';
import { InstantSearch, SearchBox } from 'react-instantsearch-dom';

const { Meta } = Card;

const { Header, Footer, Content } = Layout;


var Hits = ({ hits, hitComponent: HitComponent }) => (
  // Spread the hit on HitComponent instead of passing the full object. BC.
  // ex: <HitComponent {...hit} key={hit.objectID} />
  <Row type="flex" justify="center" gutter={20}>
  {console.log(hits)}
  {
    hits.map(hit => (
      <HitComponent hit={hit} key={hit.objectID} />
    ))
  }
  </Row>
);
Hits = connectHits(Hits)

const Search = () => (
     <Hits hitComponent={Product} />
);


const Product = ({hit}) => {
  return (
    <Col lg={5} sm={10} xs={20}
      style={{marginLeft:"12px"}}
    >
      <Bookmark bookmark={hit} sender={{ avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" }} />
    </Col>
  )
}




class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header>Header</Header>
          <Content>

            <InstantSearch
              appId="HA06CA1KD0"
              apiKey="d9cd464c44020aff39240f73ce51ec99"
              indexName="Bookmark"
            >
            {console.log(this)}
              <SearchBox 
                className="search-box"
                autoFocus={true}
                />
                <Search />
            </InstantSearch>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;