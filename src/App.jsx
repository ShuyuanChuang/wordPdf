import './App.css'
import data from './data/file.json'
import PageOne from './PageOne'
import PageTwo from './PageTwo'

function App() {

  return (
    <div className='flex flex-col'>
      <PageOne data={data} allPage={3} nowPage={1} />
      <PageTwo data={data} allPage={3} nowPage={2} />
    </div>
  )
}

export default App
