import React from 'react'

const Buttons = ({ button, isSelected, setIsSelected }) => {
    return (
        <div>
            {button.map((text, index) => {
                return (
                    <div className=' cursor-pointer py-3 '>
                        <p className={isSelected == index ? 'bg-orange-300 text-xl p-4 border border-3' : ''}
                            onClick={() => setIsSelected(index)}
                        >{text}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Buttons
