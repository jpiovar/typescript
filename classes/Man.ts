class Man {
    protected name: string;
    public constructor(fullName: string) {
        this.name = fullName;
    }
    public town(townName: string) {
        console.log(`${this.name} is from ${townName}`);
    }
}
class Superman extends Man {
    readonly speed: number = 11;
    public howFast() {
        console.log(`${this.name} has speed ${this.speed}`);
    }
}
var smallMan = new Man('janko hrasko');
smallMan.town('hraskovo');
var superman = new Superman('ferdo mravec');
superman.speed;
superman.howFast();