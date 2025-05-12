import React from 'react';
import Input_UI from './UI/input/InputUI';
import Select_UI from './UI/select/SelectUI';



const PostFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <Input_UI
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
                type='text'
                placeholder='search'
            />
            <Select_UI
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort:selectedSort })}
                defaultValue='Sorting'
                options={[
                    { value: 'title', name: 'By title' },
                    { value: 'body', name: 'By description' },
                ]}
            />
        </div>
    );
};

export default PostFilter;