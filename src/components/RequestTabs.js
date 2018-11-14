/* global M */
import React from 'react';
import ItemList from './ItemList';

class Tabs extends React.Component {
    componentDidMount() {
        let options = {};
        let tabs = document.querySelectorAll('.tabs');
        M.Tabs.init(tabs, options);
    }

    render() {
        return (
            <div className="row" style={{ marginTop: '40px' }}>
                <div className="col s12">
                    <ul className="tabs">
                        <li className="tab col s3">
                            <a className="active" href="#active">
                                Active
                            </a>
                        </li>
                        <li className="tab col s3">
                            <a href="#approved">Approved</a>
                        </li>
                        <li className="tab col s3">
                            <a href="#wishlist">Wishlist</a>
                        </li>
                        <li className="tab col s3 disabled">
                            <a href="#archive">Archive</a>
                        </li>
                    </ul>
                </div>
                <div id="active" className="col s12">
                    <ItemList title="Active Requests" />
                </div>
                <div id="approved" className="col s12">
                    <ItemList title="Approved Requests" />
                </div>
                <div id="wishlist" className="col s12">
                    <ItemList title="Wishlist Requests" />
                </div>
                <div id="archive" className="col s12">
                    <ItemList title="Archive Requests" />
                </div>
            </div>
        );
    }
}

export default Tabs;
