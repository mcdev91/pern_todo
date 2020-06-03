import React from 'react';

const UserInfo = ({ name, id }) => {
    return (
        <div className='flex flex-column'>
            <div className='white f3 fl w-100 pa2'>
                {`User: ${name}`}
            </div>
            <div className='white f3 fl w-100 pa2'>
                {`Id: ${id}`}
            </div>
        </div>
    );
}

export default UserInfo;