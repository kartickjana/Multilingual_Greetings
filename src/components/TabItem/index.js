import './index.css'

const TabItem = props => {
  const {details, changeState, isActive} = props
  const {id, buttonText} = details
  const classEl = isActive === true ? 'activeEl' : 'notActive'

  const greetings = () => {
    changeState(id)
  }

  return (
    <li className="buttonList">
      <button className={classEl} type="button" onClick={greetings}>
        {buttonText}
      </button>
    </li>
  )
}

export default TabItem
