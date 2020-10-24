import React, {useEffect, useRef} from "react";

const ModalPokemon = ({image, close}) => {

    const ref = useRef(null)

    useEffect(() => {
        document.addEventListener('click', handleClick)
        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])

    const handleClick = (event) => {
        if (!ref.current.contains(event.target)) {
            close()
        }
    }

    return (
        <div className="fixed-overlay">
            <div className="modal" ref={ref}>
                <div className="modal_container">
                    <img src={image} alt='card'/>
                </div>
            </div>
        </div>
    )
}

export default ModalPokemon