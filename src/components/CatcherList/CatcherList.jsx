import { useSelector, useDispatch } from 'react-redux';

function CatcherList (){

    const dispatch = useDispatch()
    const catcherList = useSelector((store) => store.catcherList)

    const clickedCatcher = (catcher) => {
        dispatch({
          type: "CURRENT_CATCHER",
          payload: catcher
        })
      };

    return (
        <ul>
        {catcherList.map(catcher => (
          <li
            onClick={() => clickedCatcher(catcher)}
          >
            {catcher}
          </li>
        ))}
      </ul>
    )
}

export default CatcherList;