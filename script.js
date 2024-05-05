function toggleVideo(trailerNumber) {
  console.log(`Toggling video for trailer ${trailerNumber}`);

  const trailer = document.getElementById(`trailer${trailerNumber}`);
  console.log(trailer);  // Log the trailer element

  const video = trailer.querySelector("video");
  console.log(video);    // Log the video element

  video.pause();
  video.currentTime = 0;

  // Log the current classList before toggling
  console.log("Current classList:", trailer.classList.toString());

  trailer.classList.toggle("active");

  // Log the updated classList after toggling
  console.log("Updated classList:", trailer.classList.toString());
}







function changeBg(bg, title) {
  const banner = document.querySelector('.banner');
  const contents = document.querySelectorAll('.content');

  banner.style.background = `url("image/${bg}")`;
  banner.style.backgroundSize = 'cover';
  banner.style.backgroundPosition = 'center';

  contents.forEach(content => {
    content.classList.remove('active');
  });

  const activeContent = document.querySelector(`.content.${title}`);
  if (activeContent) {
    activeContent.classList.add('active');
  }
}

