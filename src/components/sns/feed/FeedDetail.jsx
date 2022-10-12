import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiBookmark, BiMessageAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {
  FeedActionList,
  FeedCardWrapper,
  FeedDetailWrapper,
  FeedItemDescription,
  FeedItemImg,
  FeedItemWrapper,
  FeedWriterWrapper,
} from './FeedDetail.styled';

export default function FeedDetail() {
  return (
    <FeedDetailWrapper>
      <FeedCardWrapper>
        {/* 작성자 */}
        <FeedWriterWrapper>
          <Link to>
            <img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/166227517469087324.jpeg?gif=1&w=36&h=36&c=c&webp=1"
              alt=""
            />
            <span>icanfly14</span>
          </Link>
          <span className="FeedWriterWrapperSpan" />
          <button>팔로우</button>
        </FeedWriterWrapper>
        {/* 컨텐츠 */}
        <FeedItemWrapper>
          <FeedItemImg>
            <img
              src="https://image.ohou.se/i/video-service-prd-s3-bucket-thumbnail/634527c3e82a3072d14b2044/634527c3e82a3072d14b2044.0000001.jpg?gif=1&w=480&q=80&webp=1"
              alt=""
            ></img>
          </FeedItemImg>
          <FeedActionList>
            <Link to>
              <AiOutlineHeart />
              <span>2</span>
            </Link>
            <Link to>
              <BiBookmark />
              <span>23</span>
            </Link>
            <Link to>
              <BiMessageAlt />
              <span>8</span>
            </Link>
          </FeedActionList>
          <FeedItemDescription>
            <div className="card-item-description__content">
              영화 노트북은 인생영화.💓 제일좋아하는 이장면!
            </div>
          </FeedItemDescription>
        </FeedItemWrapper>
      </FeedCardWrapper>
      <FeedCardWrapper>
        {/* 작성자 */}
        <FeedWriterWrapper>
          <Link to>
            <img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/166227517469087324.jpeg?gif=1&w=36&h=36&c=c&webp=1"
              alt=""
            />
            <span>icanfly14</span>
          </Link>
          <span className="FeedWriterWrapperSpan" />
          <button>팔로우</button>
        </FeedWriterWrapper>
        {/* 컨텐츠 */}
        <FeedItemWrapper>
          <FeedItemImg>
            <img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/160225401255100601.jpeg?gif=1&w=480&h=480&c=c&q=80&webp=1"
              alt=""
            ></img>
          </FeedItemImg>
          <FeedActionList>
            <Link to>
              <AiOutlineHeart />
              <span>2</span>
            </Link>
            <Link to>
              <BiBookmark />
              <span>23</span>
            </Link>
            <Link to>
              <BiMessageAlt />
              <span>8</span>
            </Link>
          </FeedActionList>
          <FeedItemDescription>
            <div className="card-item-description__content">
              영화 노트북은 인생영화.💓 제일좋아하는 이장면!
            </div>
          </FeedItemDescription>
        </FeedItemWrapper>
      </FeedCardWrapper>
      <FeedCardWrapper>
        {/* 작성자 */}
        <FeedWriterWrapper>
          <Link to>
            <img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/166227517469087324.jpeg?gif=1&w=36&h=36&c=c&webp=1"
              alt=""
            />
            <span>icanfly14</span>
          </Link>
          <span className="FeedWriterWrapperSpan" />
          <button>팔로우</button>
        </FeedWriterWrapper>
        {/* 컨텐츠 */}
        <FeedItemWrapper>
          <FeedItemImg>
            <img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/163511895889114512.jpeg?gif=1&w=480&h=480&c=c&q=80&webp=1"
              alt=""
            ></img>
          </FeedItemImg>
          <FeedActionList>
            <Link to>
              <AiOutlineHeart />
              <span>2</span>
            </Link>
            <Link to>
              <BiBookmark />
              <span>23</span>
            </Link>
            <Link to>
              <BiMessageAlt />
              <span>8</span>
            </Link>
          </FeedActionList>
          <FeedItemDescription>
            <div className="card-item-description__content">
              영화 노트북은 인생영화.💓 제일좋아하는 이장면!
            </div>
          </FeedItemDescription>
        </FeedItemWrapper>
      </FeedCardWrapper>
      <FeedCardWrapper>
        {/* 작성자 */}
        <FeedWriterWrapper>
          <Link to>
            <img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/166227517469087324.jpeg?gif=1&w=36&h=36&c=c&webp=1"
              alt=""
            />
            <span>icanfly14</span>
          </Link>
          <span className="FeedWriterWrapperSpan" />
          <button>팔로우</button>
        </FeedWriterWrapper>
        {/* 컨텐츠 */}
        <FeedItemWrapper>
          <FeedItemImg>
            <img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/163511895889114512.jpeg?gif=1&w=480&h=480&c=c&q=80&webp=1"
              alt=""
            ></img>
          </FeedItemImg>
          <FeedActionList>
            <Link to>
              <AiOutlineHeart />
              <span>2</span>
            </Link>
            <Link to>
              <BiBookmark />
              <span>23</span>
            </Link>
            <Link to>
              <BiMessageAlt />
              <span>8</span>
            </Link>
          </FeedActionList>
          <FeedItemDescription>
            <div className="card-item-description__content">
              영화 노트북은 인생영화.💓 제일좋아하는 이장면!
            </div>
          </FeedItemDescription>
        </FeedItemWrapper>
      </FeedCardWrapper>
      <FeedCardWrapper>
        {/* 작성자 */}
        <FeedWriterWrapper>
          <Link to>
            <img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/166227517469087324.jpeg?gif=1&w=36&h=36&c=c&webp=1"
              alt=""
            />
            <span>icanfly14</span>
          </Link>
          <span className="FeedWriterWrapperSpan" />
          <button>팔로우</button>
        </FeedWriterWrapper>
        {/* 컨텐츠 */}
        <FeedItemWrapper>
          <FeedItemImg>
            <img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166546278300246529.jpeg?gif=1&w=720&webp=1"
              alt=""
            ></img>
          </FeedItemImg>
          <FeedActionList>
            <Link to>
              <AiOutlineHeart />
              <span>2</span>
            </Link>
            <Link to>
              <BiBookmark />
              <span>23</span>
            </Link>
            <Link to>
              <BiMessageAlt />
              <span>8</span>
            </Link>
          </FeedActionList>
          <FeedItemDescription>
            <div className="card-item-description__content">
              영화 노트북은 인생영화.💓 제일좋아하는 이장면!
            </div>
          </FeedItemDescription>
        </FeedItemWrapper>
      </FeedCardWrapper>
    </FeedDetailWrapper>
  );
}
