import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import './Toggle.css';

Toggle.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    name: PropTypes.string,
    checked: PropTypes.bool
}

function Toggle(props) {
    const toggle = useRef()
    const checkbox = useRef()
    console.log('toggle', toggle, 'checkbox', checkbox);
    console.log('props.name', props.name, 'props.value', props.value,)
    const handleToggle = () => {
        if (props.onChange) props.onChange()
        toggle.current.classList.toggle('toggled')
        checkbox.current.checked = !checkbox.current.checked
    }

    return (

        < div >
            <input ref={checkbox}
                name={props.name}
                className='toggle-checkbox'
                type='checkbox'
                defaultChecked={props.value}
                value={props.value || false}>
            </input>

            <span
                ref={toggle}
                onClick={handleToggle}
                className={props.checked ? 'toggled toggle-switch' : 'toggle-switch'}
            >
                <span className='toggle'></span>
            </span>
        </div >
    )
}

export default Toggle;
