import React, { useState } from 'react';
import { ItemCard, ImgCard, ImgModal } from './ImageGalleryItemStyle';
import CustomModal from 'components/Modal/CustomModal';

const ImageGalleryItem = ({ src, href }) => {
  const [showModal, setShowModal] = useState(false);
 

  const handlerClickImg = e => {
    setShowModal(true);
   
  };

  const closeModal = e => {
    setShowModal(false);
 
  };


  return (
    <>
      <ItemCard onClick={handlerClickImg}>
        <ImgCard src={src} alt="" />
      </ItemCard>
      <CustomModal isShowModal={showModal} onClose={closeModal}>
        <ImgModal src={href} alt="" />
      </CustomModal>
    </>
  );
};
export default ImageGalleryItem;
