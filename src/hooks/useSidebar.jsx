import { useState } from "react";


const useSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        console.log('first')
        setIsOpen(!isOpen);
    };
    return {
        isOpen,
        toggleSidebar
    };
};

export default useSidebar