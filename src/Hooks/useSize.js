import { useEffect, useState } from "react";

const useSize = () => {
    const [size, setSize] = useState(false);
    const checkSize = () => {
        setSize(window.innerWidth < 768);
    };

    useEffect(() => {
        checkSize();
        window.addEventListener('resize', checkSize);

        return () => window.removeEventListener('resize', checkSize)
    }, []);
    return size;
}

export default useSize;