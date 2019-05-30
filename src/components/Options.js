import React from 'react';
import Option from './Option';
import RemoveAll from './RemoveAll';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <RemoveAll handleDeleteOptions={props.handleDeleteOptions} />
        </div>
        {props.options.length === 0 && <p>Please add an option to get started!</p>}
        {
            props.options.map((option) => (
                <Option
                    key={option}
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }
    </div>  
);

export default Options;