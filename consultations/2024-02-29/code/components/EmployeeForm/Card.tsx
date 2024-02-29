import { ProfileCardProps } from 'components/ProfileCard/types';
import { ProfileCardContainer, ProfileCardInfo } from '../ProfileCard/styles';

function Card({ profileData }: ProfileCardProps) {
  return (
    <ProfileCardContainer>
      <ProfileCardInfo>Имя: {profileData.name}</ProfileCardInfo>
      <ProfileCardInfo>Возраст: {profileData.age}</ProfileCardInfo>
    </ProfileCardContainer>
  );
}

export default Card;
