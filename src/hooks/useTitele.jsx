import { useEffect } from "react"

const useTitle = (title)=> {
    useEffect(()=> {
        document.title = 'Bistro Boss Restaurant' + title;
    },[title])
}

export default useTitle;
