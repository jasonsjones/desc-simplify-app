import React from 'react';
import { connect } from 'react-redux';

const Item = props => {
    return (
        <div>
            <div>
                <div>
                    {props.submittedBy.name.first} {props.submittedBy.name.last}
                </div>
                <div>
                    {props.numberOfItems} {props.name}
                </div>
                <div>{props.createdAt}</div>
            </div>
        </div>
    );
};

class ItemList extends React.Component {
    render() {
        return (
            <ul>
                <li>
                    <h5>{this.props.title}</h5>
                </li>
                {this.props.items &&
                    this.props.items.filter(item => item.status === this.props.type).map(item => (
                        <li key={item._id}>
                            <Item {...item} />
                        </li>
                    ))}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.items
    };
};

export default connect(mapStateToProps)(ItemList);
