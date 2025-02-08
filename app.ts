var a =12

let arr: [number,string] = [3,"kurmi"]

enum UserRoles{
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "super_admin"
}

function kurmi9(): string{
    return "chhakka"
}

function abcd(x:number,y:String):void{
    
}

interface Userr{
    name: string,
    email: string,
    gender ?: string //?: -->> makes this one param optional
}

interface Admin extends Userr{
    admin:boolean
}

function userData(obj: Admin){
    obj.email = "ramarama@gmail.com",
    obj.admin = false

}

// two interface of samae names are merged and not treated individually 

type uuser = {
    name:"string",
    email:"string"
}

type adminn = uuser & {
    adminType: boolean
}

// interface and type is almost same but type doesnt support same name 


class neww {
    price = 30;
    model = "toy";
    names = "yeppp";
}

class Phone{
    constructor(public name:string, public isGood:boolean, public camera:number = 2){}
}

let Sam = new Phone('S23FE', true);
console.log(Sam)

let b1 = new neww();
console.log(b1)

