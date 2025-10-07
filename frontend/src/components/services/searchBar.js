import React from 'react';

export default function SearchBar({searchTerm, handleSearchChange}) {
    return (
        <>
            <div className='mt-5 mb-5 container'>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar registro"
                    name="buscador"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
        </>
    )
}