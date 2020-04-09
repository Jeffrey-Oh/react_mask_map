import React from 'react';
import styled from 'styled-components';
import bg_btn_tt_search from '../assets/images/bg_btn_tt_search.gif';

// 'react-redux' 패키지에서 제공하는 hook 함수
import { useSelector, useDispatch } from "react-redux";
// 모듈기능 참조
import * as searchMapModule from "../modules/SearchMap";

const WrapDiv = styled.div``;

const TitleBar = styled.h1`
background-color: #173647;
text-align: center;
color: #fff;
font-size: 18px;
height: 36px;
line-height: 36px;
width: 100%;
position: fixed;
left: 0;
top: 0;
`;

const TitleText = styled.span`
text-align: center;
color: #fff;
font-size: 18px;
height: 36px;
line-height: 36px;
width: 100%;
position: fixed;
left: 0;
top: 0;
`;

const SearchBar = styled.input`
height: 25px;
line-height: 25px;
width: 30%;
position: fixed;
left: 50%;
top: 3px;
z-index: 1;
border-radius: 20px;
display: none;
outline: none;
`;

const SearchBtn = styled.input`
width: 25px;
height: 25px;
line-height: 25px;
position: fixed;
left: 82%;
top: 7px;
z-index: 1;
display: none;
background-image: url(${bg_btn_tt_search});
border: none;
background-repeat: round;
`;

const SearchDiv = styled.div`
margin-top: 35px;
width: 100%;
height: 100%;
overscroll: scroll;
position: fixed;
z-index: 2;
background-color: rgba(225, 225, 225, 0.5);
display: none;
`;

const SearchList = styled.ul``;

const SearchListItem = styled.li`
list-style: none;
width: 95%;
background-color: #fff;
padding: 10px;
text-align: center;
border-bottom: solid 1px #333;
margin: auto;
background-color: rgba(255, 255, 255, 0.6);

&:last-child {
  border-bottom: unset;
}
`;

function handleSearchBar(showType="0") {
  const searchInput = document.getElementById("searchInput");
  const titleSpan = document.getElementById("titleSpan");
  const searchBtn = document.getElementById("searchBtn");

  if (searchInput.style.display === "block" || showType === "1") {
    searchInput.style.display = 'none';
    searchBtn.style.display = 'none';
    titleSpan.style.transform = "translateX(0)";
    titleSpan.style.transitionDuration = "1s";
    return;
  }
  titleSpan.style.transform = "translateX(-15%)";
  titleSpan.style.transitionDuration = "0.5s";

  setTimeout(function () {
    searchInput.style.display = 'block';
    searchBtn.style.display = 'block';
  }, 200);
};

const Header = props => {

  /** Hook 기능을 통해 상태값 가져오기 */
  const { result, loading, error } = useSelector(state => {
    return {
      ...state.searchMapModule
    };
  });

  /** action함수를 dispatch 시키기 위한 기능 가져오기 */
  const dispatch = useDispatch();

  // 검색어
  const [place, setPlace] = React.useState();

  // 검색버튼 클릭 시 지도 검색 목록 가져오기
  function handleSearchBtn() {
    const placeEle = document.getElementById("searchInput");

    const searchDiv = document.getElementById("searchDiv");
    
    searchDiv.style.display = "block";

    if (placeEle.value === "") {
      alert("키워드를 입력하세요");
      placeEle.focus();
    } else if (placeEle.value === place) {
      alert("검색어가 이전과 같으면 검색이 되지않습니다.");
      placeEle.focus();
    } else {
      setPlace(placeEle.value);
    }
  }

  function handleSelectMap(e, item) {
    e.preventDefault();

    const searchDiv = document.getElementById("searchDiv");
    
    searchDiv.style.display = "none";
    
    props.searchMapF(item);
  }

  /** 검색어 있는 경우 Ajax 연동 */
  React.useEffect(() => {
    dispatch(searchMapModule.mapAsync(place));
  }, [place]);

  return (
    <WrapDiv>
      <TitleBar>
        <TitleText id="titleSpan" onClick={handleSearchBar}>Mask Map</TitleText>
        <SearchBar id="searchInput" />
        <SearchBtn id="searchBtn" onClick={handleSearchBtn} />
      </TitleBar>
      <SearchDiv id="searchDiv" style={{display: result.length > 0 ? 'block' : 'none'}}>
        <SearchList>
          {/** 검색결과 데이터 수 만큼 목록의 아이템을 표시함 */}
          {result.map((item, index) => {
            return(<SearchListItem key={index} onClick={ (e) => handleSelectMap(e, item)}>
              {item.address_name}
            </SearchListItem>)
          })}
        </SearchList>
      </SearchDiv>
    </WrapDiv>
  );
};

export default Header;