import React from "react";

import PostListItem from '../post-list-item';
import { ListGroup } from "reactstrap";

const PostList = ({posts, onDelete}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={item.id} className="list-group-item">
                <PostListItem 
                    {...itemProps} 
                    onDelete={() => onDelete(id)}/>
            </li>
        );
    });

    return (
    <ListGroup className="app-list list-group">
        {elements}
    </ListGroup>
)
}

export default PostList;