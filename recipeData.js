const foods = [
    {
        name: "갈비찜",
        image: "https://i.namu.wiki/i/rmJ3Cvcty3e2VelwK8Tm5tjut3BcS-vrr_RzypjVWbAY7yiVh7XsIgj7nkstJMBcrISrWsVte4arnvHY53sjfjDsTUaioEh5BHqwd1JklTZD42q1pR6u8C1uXtyBWN9g413ffvF0euYCV0A3xeYoqw.webp",
        category: "한식",
        recipe: {
            ingredients: [  // 재료준비
                "소갈비(5cm) 1kg, 물 5컵(1.25L), 소갈비 육수 2컵(500ml)",
                "무 ⅛개(250g), 당근 ½개(100g), 마른 표고버섯 6개(30g, 불린 후 90g)",
                "밤 5개, 대추 3개, 식용유·소금 약간씩",
                `양념장<br>간장 4큰술, 배즙 4큰술, 설탕 2큰술, 다진파 2큰술, 다진마늘 1큰술, 참기름 1큰술, 깨소금 1큰술, 후춧가루 약간`
            ],
            preparation: [  // 준비과정
                "ㅋㄴㅇㅏㅏㅓㅀ",
            ],
            cooking: [  // 조리과정
                "ㅌ농",
            ]
        }
    },
    {
        name: "갈비탕",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "갈치구이",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "갈치조림",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "갓김치",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "감자전",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "감자조림",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "감자채볶음",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "곤드레나물밥",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "곱창구이",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "곱창전골",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "골뱅이무침",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "고등어구이",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "고사리나물",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "고추장",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "고추장아찌",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "간장",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "간장게장",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "겉절이",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "계란말이",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "계란찜",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "김밥",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "김부각",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "김구이",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "깍두기",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "깻잎장아찌",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "김치볶음밥",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "김치전",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "김칫국",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "김치찌개",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "꽃게탕",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "나박김치",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "낙지덮밥",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "낙지볶음",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "너비아니",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "누룽지",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "녹두전",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "더덕구이",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "도라지나물",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "도라지무침",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "도토리묵",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "돌솥비빔밥",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "돼지갈비구이",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "돼지국밥",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "된장",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "된장찌개",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "두부김치",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "두부조림",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "닭갈비",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "닭백숙",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "닭볶음탕",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "닭죽",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "동치미",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "동태찌개",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "떡국",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "떡볶이",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "떡만둣국",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "뚝배기불고기",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "라면",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "마늘장아찌",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "마늘쫑",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "만두",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "만두전골",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "만둣국",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "매운탕",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "막국수",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "메밀전병",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "묵은지찜",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "미역국",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "물냉면",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "무생채",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "바지락칼국수",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "배추김치",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "백김치",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "병어고추장구이",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "보리밥",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "보쌈",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "부대찌개",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "북엇국",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "불고기",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "불고기덮밥",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "버섯전",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "버섯전골",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "비빔냉면",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "비빔국수",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "새싹비빔밥",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "새우구이",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "산채비빔밥",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "삼계탕",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "삼겹살",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "소갈비구이",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "소고기무국",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "시금치나물",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "시래기된장국",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "순대",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "순대국밥",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "순두부찌개",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "수제비",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "쌈밥",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "아귀찜",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "알탕",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "오곡밥",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "오이냉국",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "오이소박이",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "오징어덮밥",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "오징어볶음",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "오리구이",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "양념갈비",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "양념게장",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "열무김치",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "육개장",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "육회",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "육회비빔밥",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "우렁된장비빔밥",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "잡곡밥",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "잡채",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "잡채덮밥",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "장어구이",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "장조림",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "잔치국수",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "제육덮밥",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "제육볶음",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "주먹밥",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "족발",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "진미채",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "전복죽",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "총각김치",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "취나물",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "청국장",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "채소죽",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "추어탕",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "콩나물국밥",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "콩나물국",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "콩나물무침",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "콩국수",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "칼국수",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "파김치",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "파전",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "편육",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "오곡밥",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "팥죽",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "회덮밥",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "흰밥",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "회무침",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "홍어회무침",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "해파리냉채",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "황태구이",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "해물파전",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "해물찜",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "호박죽",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },
    {
        name: "해물탕",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "",
            ],
            preparation: [
                "",
            ],
            cooking: [
                "",
            ]
        }
    },

    // 더 많은 음식들을 각 카테고리별로 추가할 수 있습니다
];

export default foods;