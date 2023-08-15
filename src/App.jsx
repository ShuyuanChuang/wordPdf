import './App.css'
import data from './data/file.json'
import PageOne from './PageOne'
import PageTwo from './PageTwo'

function App() {
  const businessActivities = data.businessActivities || [];
  const totalRows = 24;
  const totalPages = Math.ceil(businessActivities.length / totalRows) + 1; // 加上第一頁

  return (
    <div className='flex flex-col'>
      <PageOne data={data} totalPages={totalPages}/>
      <PageTwo data={data} totalPages={totalPages} />
    </div>
  )
}

export default App
