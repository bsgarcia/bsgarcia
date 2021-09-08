function askServer(url) {
    return $.ajax(
        {
            type: "GET",
            url: url,
            async: true,
            crossDomain: true
        });
}


function createPGGGame() {
    callOtreeAPI(
        'https://publicpot.huluc.as/ppapi/',
    );
}


async function callOtreeAPI(url) {
    let data  = await askServer(url);
    const parsedData = JSON.parse(data);
    const new_url = parsedData['session_wide_url'];
    window.location = new_url;
}


export { createPGGGame }