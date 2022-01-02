const url = 'http://localhost:9000'
export async function graphQLRequest(query,variables={}){
    const response = await postRequest("/graphql", {
        query,variables
    })
    const body = await response.json()
    if(body.errors){
        const message=body.errors.map(error=>error.message).join("\n")
        throw Error(message)
    }
    return body.data
}

function postRequest(path, data, headers) {
    return fetch(url + path, {
        headers: headers ? headers : {'content-type': 'application/json'},
        method: 'POSt',
        body: JSON.stringify(data)
    })
}
