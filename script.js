// ✅ 한 번만 선언!
const chars = document.querySelectorAll('.char');

// ✅ 랜덤 색상 함수
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// ✅ 배경색: 접속할 때 한 번 설정
document.body.style.backgroundColor = getRandomColor();

// ✅ 글자 색상: 1초마다 바꾸기
function updateCharColors() {
  chars.forEach(char => {
    char.style.color = getRandomColor();
  });
}

updateCharColors(); // 처음 한 번 실행
setInterval(updateCharColors, 1000); // 이후 반복

const items = document.querySelectorAll('.item');

items.forEach(item => {
  const img = item.querySelector('img');

  img.addEventListener('click', () => {
    // 이미 열려있는 항목이 있다면 닫기
    items.forEach(i => {
      if (i !== item) i.classList.remove('show');
    });

    // 현재 항목은 토글 (이미 열려 있으면 닫히게)
    item.classList.toggle('show');
  });
});
