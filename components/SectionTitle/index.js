import React from 'react'

const SectionTitle = (props) => {
    return (
        <div className="wpo-section-title">
            <h2>{props.MainTitle}</h2>
            <p>{props.SubTitle}</p>
        </div>

    )
}

export default SectionTitle;