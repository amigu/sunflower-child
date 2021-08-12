
// document.querySelectorAll('.hover-image').forEach( hoverFigure => {
//   const image = hoverFigure.querySelector('img')
//   if (!image) return
//   const origSrc = image.src
//   const hoverSrc = origSrc.replace(/((?:-\d+x\d+)?\.[^.]*)$/,"-hover$1")
//   const preloadImg = new Image()
//   preloadImg.src = hoverSrc
//
//   image.removeAttribute('srcset')
//
//   hoverFigure.addEventListener('mouseenter', e => {
//     image.src = hoverSrc
//   })
//   hoverFigure.addEventListener('mouseout', e => {
//     image.src = origSrc
//   })
// })

document.querySelectorAll('.hover-figure').forEach(hoverFigure => {
  const image = hoverFigure.querySelector('img')
  if (!image) return
  image.classList.add('hover-figure-orig-img')
  const hoverSrc = image.src.replace(/((?:-\d+x\d+)?\.[^.]*)$/, '-hover$1')
  const preloadImg = new Image()
  preloadImg.addEventListener('load', () => {
    image.removeAttribute('srcset')
    const hoverImage = document.createElement('img')
    hoverImage.src = hoverSrc
    hoverImage.className = 'hover-figure-hover-img'
    image.parentElement.appendChild(hoverImage)
  })
  preloadImg.src = hoverSrc
})