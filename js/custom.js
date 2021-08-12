console.log("hi custom")

document.querySelectorAll('.hover-image').forEach( hoverFigure => {
  const image = hoverFigure.querySelector('img')
  if (!image) return
  const origSrc = image.src
  const hoverSrc = origSrc.replace(/((?:-\d+x\d+)?\.[^.]*)$/,"-hover$1")
  const preloadImg = new Image()
  preloadImg.src = hoverSrc

  image.removeAttribute('srcset')

  hoverFigure.addEventListener('mouseenter', e => {
    console.log("enter")
    image.src = hoverSrc
  })
  hoverFigure.addEventListener('mouseout', e => {
    console.log("leave")
    image.src = origSrc
  })
})