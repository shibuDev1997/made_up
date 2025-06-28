import React from 'react'
import ProfileAvatar from '../Common/ProfileAvatarCommon';
import Container from '../Common/ContainerCommon';

const ProfleLayout = ({ children }) => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-0 lg:gap-6 py-8">
        <div className="w-full lg:w-1/4">
          <ProfileAvatar />
        </div>
        <div className="w-full lg:w-3/4">
          <div className="border orange-[#333333] p-[33px]">{children}</div>
        </div>
      </div>
    </Container>
  );
};

export default ProfleLayout