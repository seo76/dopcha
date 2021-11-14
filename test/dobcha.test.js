/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const Dobcha = artifacts.require("Dobcha_book");

contract('Dobcha_book', function([deployer, user1, user2]){ 
    // 각각의 파라미터에는 10개의 주소중 순서대로 들어감 
	
    let dobcha; beforeEach(async () => { 
    	console.log('Before each') 
        dobcha = await Dobcha.new(); // 컨트랙트 배포 
    }) 
    
    it('Basic test', async () => { 
    	console.log('Basic test') 
        let owner = await dobcha.owner(); 
        let value = await dobcha.getSomeValue(); 
        
        console.log('owner : ' + owner); 
        console.log('value : ' + value); 
        assert.equal(value, 5) // value 값 5와 같은지 확인 
     }) 
});

// test 방법
// 1. truffle test 명령어 이용 -> test 폴더 안의 모든 파일 실행
// 2. truffle test test/Dobcha.test.js -> 테스트 할 파일 직접 지엉(단일 테스트)