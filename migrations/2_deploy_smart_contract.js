// eslint-disable-next-line no-undef
const Dobcha = artifacts.require("Dobcha");
// artifacts.require가 build 폴더 안에있는 Dobcha 데이터 가지고옴

module.exports = function(deployer){
    deployer.deploy(Dobcha);
    //Dobcha의 bytecode를 가지고 와서 deployer배포 해줌
}