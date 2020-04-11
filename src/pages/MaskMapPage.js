import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import MapContainer from "../containers/MaskMapContainer";

const Container = styled.div`
	width: 100%;
	height: 100%;
`;

const MaskMapPage = () => {
	// 위치 재설정
	const [coords, setCoords] = React.useState();

	const options = {
		enableHighAccuracy: true, // 높은 정확도 사용
		maximumAge: 0, // 캐시유효시간(사용안함)
		timeout: Infinity, // 타임아웃(무한대로 설정)
	};

	function geo_success(res_pos) {
		const crd = res_pos.coords;

		setCoords({
			lat: crd.latitude,
			lng: crd.longitude,
			type: "N",
		});
	}

	function geo_error(err) {
		console.warn("ERROR(" + err.code + "): " + err.message);
	}

	if (coords === undefined) {
		navigator.geolocation.getCurrentPosition(geo_success, geo_error, options);
	}

	function handleChangePosition(position) {
		setCoords({
			lat: position.y,
			lng: position.x,
			type: "Y",
		});
	}

	const initialValue = {
		loading: true,
	};

	if (coords !== undefined) {
		initialValue.loading = false;
	} else {
		return <div></div>;
	}

	return (
		<Container>
			<Header searchMapF={handleChangePosition} />
			<MapContainer map={coords} />
		</Container>
	);
};

export default MaskMapPage;
