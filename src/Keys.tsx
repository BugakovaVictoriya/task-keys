import { IItem } from './index';
import React, { useState } from 'react';

export function Keys(props: { initialData: IItem[]; sorting: 'ASC' | 'DESC' }) {
    const [userId, setUserId] = useState(-1);
    const sortType = props.sorting;
    const [userName, setUserName] = useState('');
    const inData = props.initialData;

    if (sortType === 'ASC') {
        inData.sort((a, d) => a.id - d.id);
    } else {
        inData.sort((a, d) => d.id - a.id);
    }

    const listItems = inData.map((inDataItem) => {
        let el;

        if (userId === inDataItem.id) {
            el = (
                <input
                    defaultValue={inDataItem.name}
                    key={inDataItem.id}
                    onChange={(e) => setUserName(e.currentTarget.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            inDataItem.name = userName;
                            setUserId(0);
                        }
                        if (e.key === 'Escape') {
                            setUserId(0);
                        }
                    }}
                />
            );
        } else {
            el = (
                <div
                    onClick={() => setUserId(inDataItem.id)}
                    key={inDataItem.id}
                >
                    {inDataItem.name}
                </div>
            );
        }
        return el;
    });
    return (
        <div>
            <ul>{listItems}</ul>
        </div>
    );
}
