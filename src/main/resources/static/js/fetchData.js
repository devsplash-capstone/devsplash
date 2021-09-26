
/**
 * Given an object containing all the required data for a given page, fetch all the needed data and return it as properties to pass to a view.
 * @param state
 * @param request
 * @returns {Promise<{}>}
 */
export default function fetchData(state, request) {
    const promises = [];
    //TODO: see comment in config.js -> you don't need to put the domain on the path for fetch calls -> the api will do that for you
    const baseUri = `${DOMAIN_NAME}`;

    for (let pieceOfState of Object.keys(state)) {
        promises.push(
            fetch(baseUri + state[pieceOfState], request)
                .then(function (res) {
                    return res.json();
                }));
    }
    return Promise.all(promises).then(propsData => {
        const props = {};
        Object.keys(state).forEach((key, index) => {
            props[key] = propsData[index];
        });
        return props;
    });
}
