import React from 'react';

const items = [
    {
        id: 1,
        name: {
            firstName: 'Henry',
            lastName: 'Smith'
        },
        quantity: 3,
        item: 'plates',
        date: 'May 24'
    },
    {
        id: 2,
        name: {
            firstName: 'Sharon',
            lastName: 'Smith'
        },
        quantity: 2,
        item: 'pants',
        date: 'May 20'
    },
    {
        id: 3,
        name: {
            firstName: 'Sharon',
            lastName: 'Smith'
        },
        quantity: 1,
        item: 'pillow',
        date: 'May 20'
    }
];

const Item = props => (
    <div className="row">
        <div className="col s1 m4">
            {props.name.firstName} {props.name.lastName}
        </div>
        <div className="col s1 m4">
            {props.quantity} {props.item}
        </div>
        <div className="col s1 m4 right-align">{props.date}</div>
    </div>
);

const ItemList = props => (
    <ul className="collection with-header">
        <li className="collection-header">
            <h5>{props.title}</h5>
        </li>
        {items.map(item => (
            <li key={item.id} className="collection-item">
                <Item {...item} />
            </li>
        ))}
    </ul>
);

export default ItemList;
