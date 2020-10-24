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
            <div className="modal">
                <div className="modal_container">
                    <img src={image} alt='card' ref={ref}/>
                </div>
            </div>
        </div>
    )
}

export default ModalPokemon