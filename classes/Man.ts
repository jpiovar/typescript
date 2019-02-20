class Man {
    public name: string;

    public constructor(fullName: string) {
        this.name = fullName;
    }

    public town(townName: string) {
        console.log(`${this.name} is from ${townName}`);
    }
}
let smallMan = new Man('janko hrasko');
smallMan.name;
smallMan.town('hraskovo');