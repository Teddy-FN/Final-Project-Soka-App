// import React, { useState } from 'react';
import '../FiturSort/style.css'


function FeatureSortAndFilter() {
    return (
        <div>
            <div className="sorter">
                <div class="dropdown filter">
                    <button class="btn btn-secondary filter-button" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <small className="nameFitur">Filter</small>
                        <small className="dropdown-toggle"></small>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    </div>
                </div>
                <div class="dropdown sort">
                    <button class="btn btn-secondary sort-button" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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