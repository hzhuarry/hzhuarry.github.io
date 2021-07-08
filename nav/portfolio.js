function goTo(name) {
    if (name === 'index') {
        window.location = `../index.html`;
    }
    else {
        window.location = `nav/${name}.html`;
    }
}