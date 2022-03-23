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
            this.snackModalEl.style.display = "block"
        })
    }
}   