import { useNavigate } from 'react-router-dom';
import "../index.css";

function Chat() {
    const navigate = useNavigate();
    function handleBackClick() {
        navigate('/history');
    }

    function Calc(){
        
    }

  return (
    <div className="flex items-center text-center flex-col justify-between h-screen">
        <h1 onClick={handleBackClick} className="text-5xl m-[25px] font-nutito flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e3e3e3">
          <path d="m274-450 248 248-42 42-320-320 320-320 42 42-248 248h526v60H274Z"/>
        </svg>
        PersonChat
      </h1>

      
    </div>
  )
}

export default Chat
