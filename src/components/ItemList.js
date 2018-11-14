import React from 'react';

const ItemList = props => (
    <ul className="collection with-header">
        <li className="collection-header">
            <h5>{props.title}</h5>
        </li>
        <li className="collection-item">
            <div className="row">
                <div className="col s1 m4">Sharon Smith</div>
                <div className="col s1 m4">2 pairs of pants</div>
                <div className="col s1 m4 right-align">May 20</div>
            </div>
        </li>
        <li className="collection-item">
            <div className="row">
                <div className="col s1 m4">Sharon Smith</div>
                <div className="col s1 m4">4 plates</div>
                <div className="col s1 m4 right-align">May 21</div>
            </div>
        </li>
        <li className="collection-item">
            <div className="row">
                <div className="col s1 m4">Sharon Smith</div>
                <div className="col s1 m4">2 pairs of pants</div>
                <div className="col s1 m4 right-align">May 20</div>
            </div>
        </li>
        <li className="collection-item">
            <div className="row">
                <div className="col s1 m4">Sharon Smith</div>
                <div className="col s1 m4">2 pairs of pants</div>
                <div className="col s1 m4 right-align">May 20</div>
            </div>
        </li>
    </ul>
);

export default ItemList;
