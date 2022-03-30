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
        [...files].forEach(files=>{ //criamos um spread para 
            promises.push(new Promise((resolve, reject)=>{ //pega o array vazio e da push nas promises
                let ajax = new XMLHttpRequest(); //aqui criamos um XML request que vai ser enviado como ajax(JOSn)
                ajax.open('POST', '/upload') //Abrimos a conexãop ajax e passamos a rota upload e o método post
                ajax.onload = event => { //assim que o ajax é carregado ele executa o try catch
                    try {
                        resolve(JSON.parse(ajax.responseText)) //o resolve da promise é o texto do ajax(JSOn)
                    } catch (e) {
                        reject(e); //erro
                    }
                };
                ajax.onerror = event => {
                    reject(event) //Retorna o erro
                }

                let formData = new FormData(); //criamos um form data
                formData.append('input-file', files )   //recebe os files(array recebendo as promises)
                ajax.send(formData); //O form data salva o arquivo recebido  pelo ajax e envia

            }));
        }); //convertemos em array e usamos o spread 
        return Promise.all(promises) //redebe todas as promises e faz o controle doque deu resolve ou reject
    }
}   