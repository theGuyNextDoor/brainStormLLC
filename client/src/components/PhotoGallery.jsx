import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RowContainer } from '../../dist/Styles.jsx';

const FeatureImg = styled.img`
  height: 90%;
  width: 30%;
`;
const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
  width: 50%;
`;
const ImagesRow = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40%;
  width: 100%;
`;

const SmallImg = styled.img`
  height: 100%;
  width: 100%;
`;

const dataTop = [
  { name: 'image 1', url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
  { name: 'image 3', url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80' },
  { name: 'image 5', url: 'https://media.istockphoto.com/photos/home-tax-deduction-picture-id1270111816?b=1&k=20&m=1270111816&s=170667a&w=0&h=r15RKKh8GsUCFjX2FvrVmx4CYrk5fiAwSlfAmcwPoUw=' },
];
const dataBottom = [
  { name: 'image 2', url: 'https://media.istockphoto.com/photos/business-holding-virtual-infographic-house-on-hand-real-estate-picture-id1285102341?b=1&k=20&m=1285102341&s=170667a&w=0&h=CGJMo0rj4hIozhB2ismCeNlt_pxda5t1yBA1EkwSANw=' },
  { name: 'image 4', url: 'https://www.pewresearch.org/wp-content/uploads/2021/08/FT_21.08.17_BigHousesSmallHouses_feature.jpg' },
  { name: 'image 6', url: 'https://static.dezeen.com/uploads/2020/02/house-in-the-landscape-niko-arcjitect-architecture-residential-russia-houses-khurtin_dezeen_2364_hero.jpg' },
];

function PhotoGallery() {
  const [featured, setFeatured] = useState({ url: dataTop[0].url, name: dataTop[0].name });

  function makeFeaturedImage(url, name) {
    setFeatured({ url, name });
  }

  const imagesTop = dataTop.map((item, index) => {
    const { name, url } = item;
    return (
      <div key={index}>
        <SmallImg src={url} alt={name} onClick={() => makeFeaturedImage(url, name)} />
      </div>
    );
  });

  const imagesBottom = dataBottom.map((item, index) => {
    const { name, url } = item;
    return (
      <div key={index}>
        <SmallImg src={url} alt={name} onClick={() => makeFeaturedImage(url, name)} />
      </div>
    );
  });

  return (
    // <div>
    //   <span>images</span>
    <RowContainer>
      <FeatureImg src={featured.url} alt={featured.name} onClick={() => makeFeaturedImage(item)} />
      <ImagesContainer>
        <ImagesRow>
          {imagesTop}
        </ImagesRow>
        <ImagesRow>
          {imagesBottom}
        </ImagesRow>
      </ImagesContainer>
    </RowContainer>
    // </div>
  );
}

export default PhotoGallery;
