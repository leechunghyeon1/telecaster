// 배경 이미지 변경 함수
function changeBackground(imageFile) {
  document.body.style.backgroundImage = `url('${imageFile}')`;
  console.log("배경 변경: ", imageFile);
}
