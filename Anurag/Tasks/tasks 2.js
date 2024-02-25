/*function asyncfunction1() {
 return new Promise ((resolve,reject)=> {
    setTimeout(()=>{
        console.log("hii");
        resolve("succcess");
    },5000);
 });
}
function asyncfunction2() {
    return new Promise ((resolve,reject)=> {
       setTimeout(()=>{
           console.log("Hello");
           resolve("succcess");
       },3000);
    });
   }
   function asyncfunction3() {
    return new Promise ((resolve,reject)=> {
       setTimeout(()=>{
           console.log("How are you");
           resolve("succcess");
       },4000);
    });
   }
console.log("Fetching data1.....")
let p1= asyncfunction1();
p1.then((res)=>{
    console.log(res)
    console.log("Fetching data2.......")
    let p2= asyncfunction2();
    p2.then((res)=>{
        console.log(res);
        console.log("Fetching data3.....")
        let p3=asyncfunction3();
        p3.then((res)=>{
            console.log(res)
        })
    })
})*/
class Message{
    constructor (){
        this.queue = [];
        this.isProcessing = false;
    }
    sendMessage(message, seconds) {
        const promise = new Promise((resolve) => {
            this.queue.push({ message, seconds, resolve });
            if (!this.isProcessing) {
                this.processQueue();
            }
        });
        return promise;
    }
    processQueue() {
        if (this.queue.length > 0) {
            const { message, seconds, resolve } = this.queue.shift();
            this.isProcessing = true;
            setTimeout(() => {
                console.log(message);
                resolve();
                this.isProcessing = false;
                this.processQueue();
            }, seconds * 1000);
        }
    }
}
const messageQueue = new Message();
messageQueue.sendMessage("Message 1", 4)
    .then(() => messageQueue.sendMessage("Message 2", 2))
    .then(() => messageQueue.sendMessage("Message 3", 2))
    .then(() => console.log("All messages sent."));

 
