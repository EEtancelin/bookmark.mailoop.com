import React, { Component } from 'react';

import { Card, Icon, Avatar } from 'antd';
import { Rate } from 'antd';

const { Meta } = Card;

const redirect = url => window.location = `http://${url}`

class Bookmark extends Component {
    render() {
        const bookmark = this.props.bookmark 
        const sender = this.props.sender
        console.log(bookmark)

        return (


            <Card
                cover={<img alt="example" src={bookmark.thumbnail_url} className="bookmark-thumbnail" />}
                actions={[<Rate value={bookmark.rating}/>]}
                onClick={() => redirect(bookmark.url) }
                style={{marginTop: 15}}
            >
                <Meta
                    avatar={<Avatar src={sender.avatar} />}
                    title={bookmark.title}
                    description={bookmark.description}
                />
            </Card>

        );
    }
}

export default Bookmark;
