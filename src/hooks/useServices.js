import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://supravatsarkar.github.io/fake-services-data-for-assignment-10/fakeServices.json')
            .then(res => res.json())
            .then(data => {
                setServices(data);

            }

            );
    }, [])

    // if (services?.length) {
    // console.log('from hooks-', services);
    return [services];
    // }

}

export default useServices;