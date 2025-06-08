function changeBackground(imageFile) {
  // body의 배경이미지를 감정별 이미지로 교체
  document.body.style.backgroundImage = `url('${imageFile}')`;
  console.log("배경 변경: ", imageFile);
}
