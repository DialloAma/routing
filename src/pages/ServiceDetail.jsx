import React from 'react';

const ServiceDetail = (props) => {
    return (
        <div>
              <h2>detail services [{props.match.params.id}]</h2>
        </div>
    );
}

export default ServiceDetail;
