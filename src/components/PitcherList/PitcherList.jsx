import { useSelector, useDispatch } from 'react-redux';

function PitcherList (){

    const dispatch = useDispatch()
    const pitcherList = useSelector((store) => store.pitcherList)

    const clickedPitcher = (pitcher) => {
        dispatch({
          type: "CURRENT_PITCHER",
          payload: pitcher
        })
      };

    return (
        <ul>
        {pitcherList.map(pitcher => (
          <li
            onClick={() => clickedPitcher(pitcher)}
          >
            {pitcher}
          </li>
        ))}
      </ul>
    )
}

export default PitcherList;