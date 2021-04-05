import React from 'react';
import plusIcon from '../../assets/icons/plus-icon.png';
import Suggestion from '../suggestion/Suggestion';
import FillterOverLay from './FillterOverLay';

const Create = ({ extra, label }) => {
    return (

        <div className="section add-item __shadow--sm">
            <div className="add-item__relative">
                <div className="add-item__input">
                    <img
                        className="add-item__icon"
                        src={plusIcon}
                        alt={label}
                    />
                    <input
                        className="add-item__input-field"
                        type="text"
                        placeholder={label}
                    />
                </div>

                {/* Fillter Overlay */}
                {extra && <FillterOverLay />}

            </div>
            <div className="horizontal-line"></div>

            {/* Suggestion Chips */}
            {extra && <Suggestion />}

        </div>

    );
};

export default Create;