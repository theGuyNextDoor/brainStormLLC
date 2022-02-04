import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RowContainer } from '../../dist/Styles.jsx';

const FeatureImg = styled.div`
  width: 30%;
  height: 70%;
  border: solid;
`;
const ImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70%;
  width: 50%;
  border: solid;
`;

const dataTop = [
  { name: 'image 1', url: 'url' },
  { name: 'image 2', url: 'url' },
];
const dataBottom = [
  { name: 'image 3', url: 'url' },
  { name: 'image 4', url: 'url' },
];

function PhotoGallery() {
  const [featured, setFeatured] = useState({ url: dataTop[0].url, name: dataTop[0].name });

  function makeFeaturedImage(url, name) {
    setFeatured({ url, name });
  }

  const imagesTop = dataTop.map((item, index) => {
    const { name, url } = item;
    return (
      <div>
        <img key={index} src={url} alt={name} onClick={() => makeFeaturedImage(url, name)} />
      </div>
    );
  });

  const imagesBottom = dataBottom.map((item, index) => {
    const { name, url } = item;
    return (
      <div>
        <img key={index} src={url} alt={name} onClick={() => makeFeaturedImage(url, name)} />
      </div>
    );
  });

  return (
    <RowContainer>
      <FeatureImg>
      <div>
        <img src={featured.url} alt={featured.name} onClick={() => makeFeaturedImage(item)} />
      </div>
      </FeatureImg>
      <ImgContainer>
        <div>
          {imagesTop}
        </div>
        <div>
          {imagesBottom}
        </div>
      </ImgContainer>
    </RowContainer>
  );
}

export default PhotoGallery;
