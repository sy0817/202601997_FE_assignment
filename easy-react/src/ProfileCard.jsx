import { useState } from 'react';

function ProfileCard({ name, age, dream, emoji, hobby, mbti }) {
  const [likes, setLikes] = useState(0);
  const [Intro, setIntro] = useState(false);

  function handleLike() {
    setLikes(likes + 1);
  }

  function handleReset() {
    setLikes(0);
  }

  function change() {
    setIntro(!Intro);
  }

  return (
    <div style={{
      border: '2px solid #b2ebf2', 
      borderRadius: '20px',
      padding: '30px',
      width: '300px',
      textAlign: 'center',
      fontFamily: 'sans-serif',
      margin: '20px auto',
      lineHeight: '1.6'
    }}>

      <div style={{ fontSize: '50px', marginBottom: '10px' }}>{emoji}</div>
      <h2 style={{ fontSize: '24px', margin: '10px 0' }}>{name}</h2>
      <p>나이: {age}세</p>
      <p>꿈: {dream}</p>
      <p>취미: {hobby}</p>
      <p>MBTI: {mbti}</p>

      <div style={{ marginTop: '20px' }}>
        <p style={{ fontSize: '22px', margin: '10px 0' }}>❤️ {likes}</p>
        <div style={{ marginBottom: '15px' }}>
          <button onClick={handleLike} style={{ marginRight: '8px' }}>+ 좋아요</button>
          <button onClick={handleReset}>초기화</button>
        </div>
      </div>

      <div>
        <button onClick={change} style={{ padding: '4px 12px' }}>
          {Intro ? '소개 숨기기' : '소개 보기'}
        </button>
      </div>

      {Intro && (
        <p style={{ marginTop: '15px', fontWeight: '500' }}>
          컴공 26학번이자 멋사 14기 최서연입니다!!
        </p>
      )}
    </div>
  );
}

export default ProfileCard;