import catMe from 'cat-me'

const mensage = catMe()

document.getElementById('app')
  .innerHTML = `
  <h1>Hola POI ***</h1>
  <pre>${mensage}!!!</pre>
`
