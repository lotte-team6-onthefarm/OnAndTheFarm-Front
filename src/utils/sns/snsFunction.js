import {
  FollowButton,
  FollowingButton,
} from '../../components/sns/follow/follow.styled';

const followStatus = (followStatus, isModifiable) => {
  if (isModifiable) {
    return '';
  } else if (!followStatus) {
    return '팔로우';
  } else if (followStatus) {
    return '팔로잉';
  }
};
const followStatusButton = (followStatus, isModifiable) => {
  if (isModifiable) {
    return '';
  } else if (followStatus) {
    return <FollowingButton>팔로잉</FollowingButton>;
  } else if (!followStatus) {
    return <FollowButton>팔로우</FollowButton>;
  }
};

export { followStatus, followStatusButton };
