import React from "react";

import styled from "styled-components";

/**
 * 위치정보 취득 컴포넌트
 * > yarn add react-geolocated
 * > https://no23reason.github.io/react-geolocated
 */
import { geolocated } from "react-geolocated";

/**
 * 카카오 지도 컴포넌트
 */
import { Map, Marker, Overlay } from "kakao-map-react";

// 'react-redux' 패키지에서 제공하는 hook 함수
import { useSelector, useDispatch } from "react-redux";
// 모듈기능 참조
import * as maskMapModule from "../modules/MaskMap";

const MapBox = styled.div`
  padding-top: 36px;
  height: calc(100% - 36px);
`;

const MaskMapContainer = props => {
  // 지도에 적용할 위도, 경도값 추출
  const pos = { lat: 37.485355200868526, lng: 126.89935859355552 };

  const options = {
    enableHighAccuracy: true, // 높은 정확도 사용
    maximumAge: 0, // 캐시유효시간(사용안함)
    timeout: Infinity // 타임아웃(무한대로 설정)
  };

  function geo_success(res_pos) {
    const crd = res_pos.coords;

    pos.lat = crd.latitude;
    pos.lng = crd.longitude;
  };

  function geo_error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };

  // geolocation을 통해 위, 경도값 받기
  if (props.coords) {
	  pos.lat = props.coords.latitude;
	  pos.lng = props.coords.longitude;
  } else {
    navigator.geolocation.getCurrentPosition(geo_success, geo_error, options);
  }

  // 위치정보를 상태값으로 등록
  const [position, setPosition] = React.useState(pos);
  const [map, setMap] = React.useState();

  /** Hook 기능을 통해 상태값 가져오기 */
  const { result, loading, error } = useSelector(state => {
	  return {
		  ...state.maskMapModule
	  };
  });

  /** action함수를 dispatch 시키기 위한 기능 가져오기 */
  const dispatch = useDispatch();

  /** 최초 실행 시 Ajax 연동 */
  React.useEffect( () => {
	  dispatch(maskMapModule.maskAsync(position.lat, position.lng));
  }, []);

  /** 지도 이동 시 Ajax 연동 */
  React.useEffect( () => {
	  dispatch(maskMapModule.maskAsync(position.lat, position.lng));
  }, [position]);

  /** 위치 정보 사용 가능 여부 확인 */
  if (!props.isGeolocationAvailable) {
    return <MapBox> 디바이스가 위치 정보를 지원하지 않습니다. </MapBox>;
  }

  if (!props.isGeolocationEnabled) {
    return <MapBox> 위치 정보 사용이 허용되지 않았습니다. </MapBox>;
  }

  if (!props.coords) {
    return <MapBox> 사용 가능한 위치 정보가 없습니다. </MapBox>;
  }

  if (loading) {
    // return <h2 style={{ paddingTop: '36px', color: '#00f' }}>검색중입니다...</h2>;
    
    return (
    <MapBox>
      <Map
        kakaoApiKey="680ab974e5cb1353034d6d7f21f2ec44"
        initialPosition={{
          longitude: position.lng,
          latitude: position.lat,
          level: 10
        }}
        //지도에 표시되는 위치가 변경된 경우
        onDragEnd={map => {
          const center = map.getCenter();
          setPosition({
            lat : center.Ha,
            lng : center.Ga
          });
        }}
        center={{
          longitude: position.lng,
          latitude: position.lat
        }}
      >
      </Map>
    </MapBox>
    )
  }

  if (error) {
	  return <h2 style={{ paddingTop: '36px', color: '#f00' }}>{error}</h2>;
  }

  return (
    <MapBox>
      <Map
        kakaoApiKey="680ab974e5cb1353034d6d7f21f2ec44"
        initialPosition={{
          longitude: position.lng,
          latitude: position.lat,
          level: 10
        }}
        //지도에 표시되는 위치가 변경된 경우
        onDragEnd={map => {
          const center = map.getCenter();
          setPosition({
            lat : center.Ha,
            lng : center.Ga
          });
        }}
        center={{
          longitude: position.lng,
          latitude: position.lat
        }}
      >
        
		{/** 검색결과 데이터 수 만큼 목록의 아이템을 표시함 */}
		{result.map((item, index) => {
		
			// 100개 이상(녹색): 'plenty' / 30개 이상 100개미만(노랑색): 'some' / 2개 이상 30개 미만(빨강색): 'few' / 1개 이하(회색): 'empty' / 판매중지: 'break'
			let color = null, state = null;

			switch (item.remain_stat) {
				case 'plenty':
					color = 'green';
					state = '100개 이상';
					break;
				case 'some':
					color = 'yellow';
					state = '30개 이상 100개 미만';
					break;
				case 'few':
					color = 'red';
					state = '2개 이상 30개 미만';
					break;
				case 'empty':
					color = 'grey';
					state = '1개 이하';
					break;
				default:
					color = 'black';
					state = '판매중단';
			}

			return(<Marker key={index}
					longitude={item.lng}
					latitude={item.lat}
					onClick={() => { alert(`${item.name} / ${state}`); }}
				/>);
		})}
      </Map>
    </MapBox>
  );
};

/**
 * 위치정보 취득 옵션 설정
 * HTML5의 Geolocation API에 기반함
 */

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true, // 높은 정확도 사용
    maximumAge: 0, // 캐시유효시간(사용안함)
    timeout: Infinity // 타임아웃(무한대로 설정)
  },
  watchPosition: true // 이동하는 동안 위치 추적 사용
})(MaskMapContainer);
