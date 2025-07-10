import { useNavigate } from 'react-router-dom';
import "../index.css";

function Chats() {
  //Navigation
  const navigate = useNavigate();

  function handleBackClick() {
    navigate('/');
  }
  function handleNewChatClick() {
    navigate('/');
  }

  return (
    <div className="flex items-center text-center flex-col justify-between h-screen">
    
    <div className="flex flex-col">
      <h1 onClick={handleBackClick} className="text-5xl m-[25px] font-nutito flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e3e3e3">
          <path d="m274-450 248 248-42 42-320-320 320-320 42 42-248 248h526v60H274Z"/>
        </svg>
        PersonChat
      </h1>

      <div className="flex flex-col gap-2 font-shantell ">
        <div className="w-sm h-[100px] bg-orange-200 rounded-3xl">       
          <h1 className="text-5xl">Холодилник порожний</h1>
        </div>
        <div className="w-sm h-[100px] bg-red-200 rounded-3xl">       
          <h1 className="text-5xl">Можна вас поцилувати</h1>
        </div>
        <div className="w-sm h-[100px] bg-orange-200 rounded-3xl">       
          <h1 className="text-5xl">Холодилник порожний</h1>
        </div>
        <div className="w-sm h-[100px] bg-red-200 rounded-3xl">       
          <h1 className="text-5xl">Можна вас поцилувати</h1>
        </div>
        <div className="w-sm h-[100px] bg-orange-200 rounded-3xl">       
          <h1 className="text-5xl">Холодилник порожний</h1>
        </div>
        <div className="w-sm h-[100px] bg-red-200 rounded-3xl">       
          <h1 className="text-5xl">Можна вас поцилувати</h1>
        </div>
        <div className="w-sm h-[100px] bg-orange-200 rounded-3xl">       
          <h1 className="text-5xl">Холодилник порожний</h1>
        </div>
        <div className="w-sm h-[100px] bg-red-200 rounded-3xl">       
          <h1 className="text-5xl">Можна вас поцилувати</h1>
        </div>
      </div>
    </div>

    <button className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-200 rounded-2xl px-6 py-3 shadow-lg z-50">
      Новий чат
    </button>


  </div>
    
  )
}

export default Chats;

//Songs
// 1 Add AI and comments - Playboy Carti-ILoveUIHateU