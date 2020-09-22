function Fetchdata(url,cbsuccess,cberror){
    var xhr=new XMLHttpRequest()
    xhr.onload=()=>{
        if(xhr.status===200){
            const response = JSON.parse(xhr.responseText)
            cbsuccess(response)
        }else{
            cberror(Error('ERORR BERO'))
            // console.log('error')
        }
    }
    xhr.open('GET',url)
    xhr.send()
}

module.exports=Fetchdata