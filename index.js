function goTo(name) {
    window.location = `nav/${name}.html`;
}

function goOutTo(name) {
    url = `https://${name}.com`
    if (name === 'linkedin') {
        url += "/in/"
    }
    //add handle
    window.open(url + `/hzhuarry`);
    console.log(url);
}