class DropBoxController {

    constructor(){
        this.inputFilesEl = document.querySelector('#files')
        this.btnSendFileEl = document.querySelector('#btn-send-file')
        this.InitEvents();
    }
    InitEvents(){
        this.btnSendFileEl.addEventListener('click', e=>{
            this.inputFilesEl.click();
        });
    }
}   