const myShopping = [
    { category: "과일", price: 12000　},
    { category: "의류", price:10000　 },
    { category: "의류", price: 20000　},
    { category: "장난감", price: 9000 },
    { category: "과일", price: 5000　 },
    { category: "의류", price: 10000  },
    { category: "과일", price: 8000　　},
    { category: "의류", price: 7000　　},
    { category: "장난감", price: 5000  },
    { category: "의류", price: 10000　 }
]

const mypage = (myShopping) => {
    
    let count = 0;
    let price = 0;
    let grade;
    
    for(i=0;i< myShopping.length ;i++){
        if (myShopping[i].category === '의류'){
            count++
            price = myShopping[i].price + price
        }
    }
    
    if (count >= 5){
        grade = 'Gold'
    } else if (grade >= 3){
        grade = 'Silver'
    } else {
        grade = 'Bronze'
    }

    console.log(`의류를 구매한 횟수는 총 ${count}회 금액은 ${price}원이며 등급은 ${grade}입니다.`)
}

mypage( myShopping )


























































