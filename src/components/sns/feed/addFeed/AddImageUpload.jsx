import React, { useRef, useState } from 'react';
import { ImageUploadWrapper } from './AddFeed.styled';
import { HiCamera } from 'react-icons/hi';
import { IconBox } from '../../../seller/common/Icon.style';
import AddFeedCarousel from './AddFeedCarousel';
import Modal from '../../../common/Modal';
import AddFeedProductList from './AddFeedProductList';

export default function AddImageUpload(props) {
  const [modal, setModal] = useState(false);
  const fileInput = useRef();
  const fileUploadHandler = () => {
    fileInput.current.click();
  };
  return (
    <ImageUploadWrapper>
      {props.preImages.length === 0 ? (
        <>
          <button
            className="feedUploadButton"
            onClick={() => {
              fileUploadHandler();
            }}
          >
            <IconBox className="feeduploadIcon">
              <HiCamera />
            </IconBox>
            <div className="feeduploadTitle">사진 올리기</div>
            <div className="feeduploaddetail">(*최대 10장까지)</div>
            <input
              type="file"
              style={{ display: 'none' }}
              ref={fileInput}
              multiple="multiple"
              onChange={props.handleChange}
            />
          </button>
        </>
      ) : (
        <div>

          <AddFeedCarousel
            images={props.preImages}
            productSelect={props.productSelect}
            width="550px"
            height="540px"
            setModal={setModal}
          ></AddFeedCarousel>
        </div>
        
      )}

      {/* modal */}
      {modal && (
        <Modal
          closeModal={() => setModal(!modal)}
          width="375px"
          padding="0px"
          height="450px"
        >
          <AddFeedProductList
            productListHandler={props.productListHandler}
            setModal={setModal}
          />
        </Modal>
      )}
    </ImageUploadWrapper>
  );
}
