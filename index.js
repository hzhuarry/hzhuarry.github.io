function goTo(name) {
    window.location = `nav/${name}.html`;
}

function goOutTo(name) {
    url = `https:www.${name}.com`
    if (name === 'linkedin') {
        url += "/in/"
    }
    //add handle
    window.open(url + `/hzhuarry`);
    console.log(name);
}