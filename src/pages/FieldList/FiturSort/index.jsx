import React, { useState } from 'react';


function FeatureSortAndFilter() {
    // eslint-disable-next-line no-unused-vars
    const [sortName, setSortName] = useState('')
    const handleByName = () => {

    }

    return (
        <div>
            <div className="sorter">
                <div class="dropdown filter">
                    <button class="btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <small className="nameFitur">Filter</small>
                        <small className="dropdown-toggle"></small>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <p onClick={handleByName}>Name</p>
                    </div>
                </div>
                <div class="dropdown sort">
                    <button class="btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <small className="nameFitur">Sort</small>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureSortAndFilter;