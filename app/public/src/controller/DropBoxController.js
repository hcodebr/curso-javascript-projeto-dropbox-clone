class DropBoxController {

    constructor(){
        this.inputFilesEl = document.querySelector('#files') //seletor de arquivos
        this.btnSendFileEl = document.querySelector('#btn-send-file') //botao de enviar arquivos
        this.snackModalEl = document.querySelector('#react-snackbar-root') //barra de progresso
        this.InitEvents();
    }
    InitEvents(){
        this.btnSendFileEl.addEventListener('click', e=>{
            this.inputFilesEl.click();

        });
        this.inputFilesEl.addEventListener('change', e=>{
            console.log(e.target.files);
            this.uploadTask(e.target.files) //vai fazer upload de varios arquivos
            this.snackModalEl.style.display = "block"
        })
    }
    uploadTask(files){
        let promises = []; //usamos uma promise pois cada arquivo pode ocorrer o upload ou falhar
        [...files].forEach(file=>{
            promises.push(new Promise((resolve, reject)=>[

            ]));
        }) //convertemos em array e usamos o spread 
        return Promise.all(promises) //redebe todas as promises
    }
}   