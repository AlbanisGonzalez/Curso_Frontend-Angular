class SmartPhone {
    constructor(modelAtributo, coresAtributo, ramAtributo, isAndoidAtributo) {
        this.model = modelAtributo;
        this.cores = coresAtributo;
        this.ram = ramAtributo;
        this.isAndoid = isAndoidAtributo;
    }
}

const phone4 = new SmartPhone("Xiaomi redmi 13", 6, 16, true);
console.log(phone4)

/*
const phone1 = new SmartPhone("MSI", 4, 12, true);
console.log(phone1)

const phone2 = new SmartPhone("Xiaomi redmi 13", 6, 16, true);
console.log(phone2)

const phone3 = new SmartPhone()
console.log(phone3)
*/

