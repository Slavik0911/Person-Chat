import "../index.css";

function App() {


  return (
    <div className='flex flex-col text-center items-center'>
      <h1 className="text-5xl m-[25px] font-nutito">git init
      </h1>
      <div className='flex flex-col gap-2 font-shantell'>
        <div className='w-sm h-[100px] bg-orange-200 rounded-3xl'>       
          <h1 className="text-5xl">
            психолог
          </h1>
          <h1 className="text-base">
            Ввічливий, м'який, підтримуючий
          </h1>
        </div>
        <div className='w-sm h-[100px] bg-blue-200 rounded-3xl'>       
          <h1 className="text-5xl">
            детектив
          </h1>
          <h1 className="text-base">
            Критичний, прямолінійний, логічний
          </h1>
        </div>
      </div>
      
    </div>
  )
}

export default App
