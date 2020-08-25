import React from 'react';

// 프로필에서 사용할 데이터
const profileData = {
    velopert: {
        name: '김민준',
        description: 'Frontend Engineer @ Laftel Inc. 재밌는 것만 골라서 하는 개발자',
    },
    gildong: {
        name: '홍길동',
        description: '전래동화의 주인공',
    },
};

const Profile = ({ match }) => {
    // 파라미터를 받아올 땐 match 안에 있는 params 값을 참조합니다.
    // match 객체 안에는 현재의 주소가 Route 컴포넌트에서 정한 규칙과 어떻게 일치하는지에 대한 정보가 들어있다.

    const { username } = match.params;
    const profile = profileData[username];

    if (!profile) {
        return <div>존재하지 않는 유저입니다.</div>;
    }

    return (
        <div>
            <h3>
                {username} ({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;
