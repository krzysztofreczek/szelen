addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
    const params = new URLSearchParams(request.url.split('?')[1])
    const user = params.get('user')
    const timestamp = params.get('timestamp')

    const headers = {
        'Access-Control-Allow-Origin': 'https://krzysztofreczek.github.io',
        'Access-Control-Allow-Methods': ['OPTION', 'POST'],
        'Access-Control-Allow-Headers': ['authorization', 'content-type']
    }

    if (!user) {
        return new Response('"user" parameter is missing', {
            status: 400, 
            headers: headers 
        })
    }

    if (!timestamp) {
        return new Response('"timestamp" parameter is missing', {
            status: 400, 
            headers: headers 
        })
    }
    
    const payload = `{"build_parameters" : {"CIRCLE_JOB" : "add_event", "EVENT_USER" : "` + user + `", "EVENT_TIMESTAMP" : "` + timestamp + `" }}`  
    const url = 'https://circleci.com/api/v1.1/project/github/krzysztofreczek/szelen/tree/master'
    const req = new Request(url, {
        method: 'POST',
        body: payload,
        headers: {
            'Authorization': 'Basic ' + btoa('cf6722fa167f5b50afc9f33b04c7824f04052f31:'),
            'Content-type': 'application/json'
        },
    })
    resp = await fetch(req)

    const message = 'triggered with result: ' + resp.statusText
    return new Response(message, {
        status: resp.status, 
        headers: headers 
    })
}
