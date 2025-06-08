function changeBackground(imageFile) {
  const viewer = document.getElementById('guitarViewer');
  viewer.setAttribute('environment-image', imageFile);
  console.log("배경 변경: ", imageFile);
}
