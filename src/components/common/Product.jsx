import React from 'react';
import {
  ProductDiv,
  ProductImgDiv,
  ProductImg,
  ProductInfoDiv,
  ProductImgIcons,
} from './Product.style';
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from 'react-icons/ai';

export default function Product(props) {
  return (
    <ProductDiv>
      <ProductImgDiv>
        <ProductImg
          src="https://contents.lotteon.com/itemimage/_v142043/LI/12/06/01/16/35/_1/LI1206011635_1_1.jpg/dims/optimize/dims/resizemc/360x360"
          alt="onandthefarmlogo"
        ></ProductImg>
        <ProductImgIcons>
          <AiOutlineHeart fontSize="x-large" />
          <AiOutlineShoppingCart fontSize="x-large" />
        </ProductImgIcons>
      </ProductImgDiv>

      <ProductInfoDiv>
        <p>[햇살가득] 경북 가정용 햇 사과 3.5kg (20~24과)</p>
        <p>
          <span>34,900</span> 원
        </p>
        <p>
          <AiFillStar color="darkorange" /> 4.8(433)
        </p>
        
      </ProductInfoDiv>
    </ProductDiv>
  );
}

// export default function Product(props) {
//   return (
//     <div>
//       <div className="srchProductUnitImageArea">
//         <div className="srchThumbImageWrap ">
//           <img
//             alt=""
//             src="https://contents.lotteon.com/itemimage/_v150246/LO/14/84/62/50/31/_1/48/46/25/03/2/LO1484625031_1484625032_1.jpg/dims/optimize/dims/resizemc/360x360"
//           ></img>
//         </div>
//         <strong className="srchRankBadge srchHighRankBadge">1</strong>
//         <button
//           type="button"
//           className="srchBtnHeart _srchBtnHeart LO1484625031_1484625032"
//           data-params="memberNo=&amp;sellerProductNo=LO1484625031&amp;sellerItemNo=LO1484625031_1484625032&amp;productNo=LO1484625031&amp;setYn=N&amp;displayInfwCode=MAT29675"
//           title="[1+1] 필라델피아 치즈케익 28oz 총 20조각"
//         >
//           <span className="srchLottieObject _srchLottieWish"></span>
//           <span className="blind">좋아요</span>
//         </button>
//       </div>
//       <a
//         href="https://www.lotteon.com/p/product/LO1484625031?sitmNo=LO1484625031_1484625032&amp;mall_no=1&amp;dp_infw_cd=MAT29675"
//         className="srchGridProductUnitLink _dataLayerTarget"
//         data-ga-event="select_item"
//         data-ga-data='{"id":"LO1484625031","name":"[1+1] 필라델피아 치즈케익 28oz 총 20조각","price":34900,"brand":"필라델피아","disp_category":"A","disp_category2":"A","brd_no":"P6060","spd_no":"LO1484625031","itm_no":"LO1484625031_1484625032","sitm_no":"LO1484625031_1484625032","unit_type":"product","quantity":1,"location_id":"MAT31561","dp_infw_cd":"MAT29675","best":{"mall_filter_info":"LTON"}}'
//         aria-labelledby="product-head-LO1484625031_1 product-body-LO1484625031_1"
//       >
//         <div
//           className="srchProductUnitInfoArea "
//           aria-hidden="true"
//           id="product-body-LO1484625031_1"
//         >
//           <div className="srchProductInfoColumn">
//             <div className="srchProductUnitTitle">
//               <strong className="srchProductUnitVendor">필라델피아</strong>{' '}
//               [1+1] 필라델피아 치즈케익 28oz 총 20조각
//             </div>
//           </div>
//           <div className="srchProductInfoColumn">
//             <div className="srchProductUnitPriceArea">
//               <span className="srchCurrentPrice">
//                 <strong>34,900</strong>원
//               </span>
//             </div>
//             <div className="srchProductStatusArea">
//               <div className="srchRating">
//                 <span className="srchRatingStar">
//                   <span className="srchRatingStarYellow"></span>
//                 </span>
//                 <span className="srchRatingScore">
//                   4.8 <strong className="srchProductReviewCount"> (422)</strong>
//                 </span>
//               </div>
//             </div>
//             <div className="srchProductCategoryBestFlag">
//               <div className="srchProductFlagRank">
//                 <span className="srchProductFlagRankItem">최근판매BEST</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </a>
//     </div>
//   );
// }
