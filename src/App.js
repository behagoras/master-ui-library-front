import {CardGrid, sum} from '@behagoras/master-ui-library'
const summed = sum(1,2)
console.log(summed)

const cards = [
  {
    header: 'header',
    content: 'content',
    footer: 'footer',
    color:'red'
  },
  {
    header: 'header',
    content: 'content',
    footer: 'footer',
    color:'green'
  },
  {
    header: 'header',
    content: 'content',
    footer: 'footer',
    color:'blue',
  },
  {
    header: 'header',
    content: 'content',
    footer: 'footer',
    color:'cyan'
  },
  {
    header: 'header',
    content: 'content',
    footer: 'footer',
    color:'magenta',
  },
  {
    header: 'header',
    content: 'content',
    footer: 'footer',
    color:'yellow',
  },
]

function App() {
  return (
    <div className="App">
      <CardGrid cards={cards} />
    </div>
  );
}

export default App;
