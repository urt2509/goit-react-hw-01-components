import PropTypes from 'prop-types';
import {
  Container,
  Description,
  Avatar,
  UserName,
  Tag,
  Location,
  StatsList,
  StatsItem,
  Label,
  StatsText,
} from './Profile.styled';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatsList>
        <StatsItem>
          <Label>Followers</Label>
          <StatsText>{followers}</StatsText>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <StatsText>{views}</StatsText>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <StatsText>{likes}</StatsText>
        </StatsItem>
      </StatsList>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export { Profile };
