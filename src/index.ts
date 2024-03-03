import { useState, useEffect } from 'react';

const useFixHydration = (): boolean => {
    const [hasMounted, setHasMounted] = useState<boolean>(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    return hasMounted;
};

export default useFixHydration;
