import React from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { getProfileWishList } from '../../../apis/sns/profile';
import { snsNowId } from '../../../recoil';
import NoneFeed from './NoneFeed';
import { LikeSection } from './SnsFeed.styled';

export default function MainLike(props) {
  const [id, setId] = useRecoilState(snsNowId); // client 전역
  const { data: wishListData, isLoading: wishListLoading } = useQuery(
    ['profileWishList', id],
    () => getProfileWishList({ memberId: id }),
    {
      onSuccess: () => {},
      onError: () => {},
    },
  );
  return (
    <>
      {!wishListLoading && (
        <LikeSection>
          <div className="FeedTitle">
            <h1>
              위시 리스트 <span>{props.wishCount}</span>
            </h1>
            {wishListData.length === 0 ? (
              ''
            ) : (
              <div>
                <Link to={`/sns/${id}/like`}>전체보기</Link>
              </div>
            )}
          </div>
          {wishListData.length === 0 ? (
            <Link to="/products">
              <NoneFeed text="첫번째 좋아요를 눌러보세요" />
            </Link>
          ) : (
            <div className="FeedContents">
              {wishListData.map((wishData, idx) => {
                return (
                  <div key={idx}>
                    <Link
                      to={`/products/detail/${wishData.productId}`}
                      className="css-gi86zd e1qgexi82"
                    >
                      <img
                        className="css-1n0kzcr e1qgexi81"
                        alt=""
                        src={wishData.productImgSrc}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </LikeSection>
      )}
    </>
  );
}
