// 📄 src/App.js

import ProfileCard from './ProfileCard';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
      <ProfileCard
        name="최서연"
        age={20}
        dream="잠자기"
        hobby="잠자기"
        mbti="INTP"
      />
    </div>
  );
}

export default App;