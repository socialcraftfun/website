let cachedToken = localStorage.getItem('at') || ''

interface ApiRequestInit extends Omit<RequestInit, 'headers'> {
    headers?: Record<string, string>;
}

function setHeader(options: ApiRequestInit, name: string, value: string) {
    options.headers = options.headers || {}
    options.headers[name] = value
}

// https://stackoverflow.com/a/8511350/6620659
function isObject(val: unknown): boolean {
    return typeof val === 'object' &&
        !Array.isArray(val) &&
        val !== null
}
const fetchApi = async (path: string, options: ApiRequestInit ={}) => {
    if (isObject(options.body) && !(options.body instanceof FormData)) {
        options.body = JSON.stringify(options.body)
        setHeader(options, 'Content-Type', 'application/json')
    }

    setHeader(options, 'Accept', 'application/json')

    const url = path;
    return fetch(url, options)
}

export default fetchApi