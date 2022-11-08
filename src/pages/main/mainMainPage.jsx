import React from 'react';
import { Link } from 'react-router-dom';
import { getProfileInfo } from '../../apis/sns/profile';
import MainCategory from '../../components/main/category/MainCategory';
import MainBanner from '../../components/main/main/MainBanner';
import MainCarousel from '../../components/main/main/MainCarousel';
import MainSns from '../../components/main/main/MainSns';
import MainSnsCarousel from '../../components/main/main/MainSnsCarousel';
import MainProductsPopular from '../../components/main/products/MainProductsPopular';
import { MainContentDiv } from './mainMainPage.style';

export default function MainMainPage() {
  //main.js
  /*
    * getFeedByRecent
    pageNumber=0
  
    * getFeedByLike
    pageNumber=0
  
    * getFeedByFollow
    pageNumber=0
 
    * getFeedByViewCount
    pageNumber=0
  */

  //profile.js
  /*
    * postAddFollow
    {
      followerMemberId : 7,
      followerMemberRole : "user"
    }

    * putCancelFollow
    {
      followerMemberId : 11,
      followerMemberRole : "user"
    }

    * postProfileInfo
    다른 사람의 프로필 정보를 조회하는 경우
      {
        memberId : 6,
        memberRole : "user"
      }
    내 프로필 정보를 조회하는 경우
      {
      }

    * postScrapLikeCount
    다른 사람의 스크랩&좋아요수를 조회하는 경우
      {
        memberId : 6,
        memberRole : "user"
      }
    나의 스크랩&좋아요수를 조회하는 경우
      {
      }


    * postFollowerList
    다른 사람의 팔로우 리스트를 조회하는 경우
      {
        memberId : 6,
        memberRole : "user"
      }
    나의 팔로우 리스트를 조회하는 경우
      {
      }

    * postFollowingList
    다른 사람의 팔로우 리스트를 조회하는 경우
      {
        memberId : 6,
        memberRole : "user"
      }
    나의 팔로우 리스트를 조회하는 경우
      {
      }

    * postProfileFeedList
    다른 사람의 프로필 메인 피드 리스트를 조회하는 경우
      {
        memberId : 6
      }
    나의 프로필 메인 피드 리스트를 조회하는 경우
      {
      }

    * postProfileScrapList
    다른 사람의 프로필 메인 스크랩 리스트를 조회하는 경우
      {
        memberId : 6
      }
    나의 프로필 메인 스크랩 리스트를 조회하는 경우
      {
      }

    * postProfileWishList
    다른 사람의 프로필 메인 위시 리스트를 조회하는 경우
      {
        memberId : 6
      }
    나의 프로필 메인 위시 리스트를 조회하는 경우
      {
      }

    * postFeedList
    다른 사람의 피드 리스트를 조회하는 경우
      {
        memberId : 6
      }
    나의 피드 리스트를 조회하는 경우
      {
      }

    * postScrapList
    다른 사람의 스크랩 리스트를 조회하는 경우
      {
        memberId : 6
      }
    나의 스크랩 리스트를 조회하는 경우
      {
      }

    * postWishList
    다른 사람의 위시 리스트를 조회하는 경우
      {
        memberId : 6
      }
    나의 위시 리스트를 조회하는 경우
      {
      }
  */

  //content.js
  /*
    * postUploadFeed
      못함
    * putModifyFeed
      못함

    * putDeleteFeed
      {
        feedId : 1
      }

    * getFeedProduct
    파라미터 없음!

    * getFeedDetail
    feedId=1

    * putUpFeedShareCount
    {
      feedId : 4
    }

    * getFeedByTag //프로미스 문제
    {
      feedTageName : "딸기",
      pageNumber : 0
    }

    * putFeedLike
    {
      feedId : 4
    }

    * putFeedUnLike
    {
      feedId : 4
    }

    * putFeedScrap
    {
      feedId : 4
    }

    * putFeedUnScrap
    {
      feedId : 4
    }
  */
  const mainLayout = [
    'EasterEgg',
    'MainCarousel',
    'MainProductsPopular',
    'MainSnsCarousel',
    'MainCategory',
    'MainBanner',
    'MainSns',
  ];
  const components = {
    MainCarousel: <MainCarousel />,
    MainCategory: <MainCategory />,
    MainProductsPopular: <MainProductsPopular />,
    MainBanner: <MainBanner />,
    MainSnsCarousel: <MainSnsCarousel />,
    MainSns: <MainSns />,
    EasterEgg: (
      <div style={{ margin: '100px 0', display: 'none' }}>
        <Link to="snstest">등록</Link>
      </div>
    ),
  };

  return (
    <MainContentDiv>
      {mainLayout.map((item, idx) => {
        return <div key={idx}>{components[item]}</div>;
      })}
    </MainContentDiv>
  );
}
