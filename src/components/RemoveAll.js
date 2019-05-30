import React from 'react';

const RemoveAll = (props) => (
    <div>
        <button className="button button--link" onClick={props.handleDeleteOptions}>Remove All</button>
    </div>
);

export default RemoveAll;