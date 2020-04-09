import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import MapContainer from '../containers/MaskMapContainer';

const Container = styled.div`
width: 100%;
height: 100%;
`;

const MaskMapPage = props => {
    // 위치 재설정
    const [coords, setCoords] = React.useState();

    if (coords === undefined) {
        setCoords({
            lat: 37.485355200868526,
            lng: 126.89935859355552
        })
    }
    
    function handleChangePosition(position) {
        setCoords({
            lat: position.y,
            lng: position.x,
            type: "Y"
        });
    }

    return (
        <Container>
            <Header searchMapF={handleChangePosition}/>
            <MapContainer map={coords}/>
        </Container>
    );
};

export default MaskMapPage;