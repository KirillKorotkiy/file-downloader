const fileInputRef = document.querySelector('input'),
downloadBtnRef = document.querySelector('.download-button')

downloadBtnRef.addEventListener('click', (event)=>{

    event.preventDefault();
    fetchInput(fileInputRef.value)
})

function fetchInput(url){
    fetch(url).then(response => response.blob()).then(file =>{
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        aTag.href=tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }).catch(error => console.log(error))
}