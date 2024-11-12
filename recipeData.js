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
                "무와 당근은 4cm 폭으로 깍둑 썰어 모서리를 둥글게 다듬는다",
                "표고버섯은 물에 불려 기둥을 뗀다",
                "밤은 껍질을 벗기고, 대추는 씨를 뺀다",
                "간장에 나머지 재료를 섞어서 찜 양념장을 만든다",
            ],
            cooking: [  // 조리과정
                "소갈비는 찬물에 담가 핏물을 뺀다",
                "냄비에 물 5컵을 붓고 끓으면 갈비를 넣어 30분 정도 삶는다",
                "삶은 갈비를 식혀 갈비에 붙은 질긴 힘줄이나 기름 덩어리를 떼어내고 2cm 간격의 칼집을 사선으로 넣는다",
                "①의 소갈비 육수는 차게 식혀 기름을 걷는다",
                "다듬은 무와 당근을 끓는 물에 10분 동안 삶아서 건져놓는다",
                "냄비에 삶은 갈비를 담고 찜 양념장의 ⅔ 분량을 넣어 고루 버무린 다음 소갈비 육수 2컵을 붓고 중간 불에서 40분 동안 푹 끓인다",
                "갈비가 무르게 익으면 삶은 무와 당근, 불린 표고버섯, 밤, 대추를 넣고 남은 양념장을 넣어 약한 불에서 15분 더 끓인다",
                "갈비와 채소에 양념 맛이 고르게 들면 그릇에 담는다",
            ]
        }
    },
    {
        name: "갈비탕",
        image: "",
        category: "한식",
        recipe: {
            ingredients: [
                "소갈비(5cm 길이) 1㎏",
                "대파 1대",
                "마늘 6쪽(30g)",
                "물 12컵(3L)",
                "무 300g",
                "국간장 4큰술",
                "계란 1개",
                "대파 1대",
                "소금 약간",

                "삶은 갈비 양념",
                "국간장 3큰술",
                "다진 파 4큰술",
                "다진 마늘 1큰술",
                "참기름 1큰술",
                "후춧가루 약간",
            ],
            preparation: [
                "소갈비는 찬물에 담가 핏물을 뺀다",
                "무는 4cm 크기로 토막 썬다",
                "계란은 깨뜨려서 흰자와 노른자로 나누어 소금을 넣고 풀어놓는다",
                "풀어놓은 계란을 약한 불에서 얇게 황백 지단으로 부치고 5cm 길이로 가늘게 채 썬다",
                "대파는 어슷하게 썬다",
                "국간장에 나머지 재료를 섞어서 삶은 갈비 양념장을 만든다",

            ],
            cooking: [
                "냄비에 물 12컵을 붓고 소갈비, 대파, 통마늘을 넣어 중간 불에서 30분 정도 끓이며 거품과 기름을 걷어낸다",
                "무는 끓는 물에 넣고 중간 불에서 30분 동안 삶아 건진다",
                "갈비가 무르게 익으면 식혀서 갈비에 붙은 질긴 힘줄이나 기름 덩어리를 떼어낸 뒤 1cm 간격으로 칼집을 어슷하게 넣어서 삶은 갈비 양념장에 버무린다",
                "무는 4×2.5×2.5cm 크기로 썬다",
                "기름을 걷어낸 국물에 양념한 갈비와 무를 넣고 약한 불에서 30분 동안 끓인 뒤 국간장, 다진 마늘, 어슷 썬 대파를 넣고 5분 동안 더 끓여서 소금으로 간을 맞춘다",
                "그릇에 갈비탕을 담고 채 썬 지단을 얹어서 낸다",

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
                "갈치 8토막(손질 후 450g)",
                "소금 1큰술",
                "감자 3개(150g)",
                "새송이버섯 180g",
                "대파 1대",
                "풋고추 1개",
                "홍고추 1개",
                "물 1컵",

                "조림 양념장",
                "고추장 1큰술",
                "고춧가루 2큰술",
                "물 2큰술",
                "간장 2큰술",
                "다진 파 2큰술",
                "다진 마늘 1큰술",
                "다진 생강 ½작은술",
                "설탕 1큰술",
                "참기름 1큰술",
                "깨소금 1큰술",
                "청주 2큰술",
                "후춧가루 약간",

            ],
            preparation: [
                "갈치는 싱싱한 것으로 골라 머리, 꼬리, 지느러미를 떼고 비늘을 벗겨낸다",
                "배를 갈라 내장을 꺼내고 깨끗이 씻은 다음 5cm로 토막 내어 소금을 뿌려둔다",
                "조림용으로 손질된 생선을 구입하면 편리하다",
                "감자와 새송이버섯은 반으로 갈라 0.6cm 두께로 썬다",
                "대파, 풋고추, 홍고추는 어슷 썬다",
                "고추장, 고춧가루에 물 2큰술을 넣고 나머지 재료를 섞어 조림 양념장을 만든다",

            ],
            cooking: [
                "냄비에 감자와 새송이버섯을 담고 조림 양념장을 반 정도 뿌린다",
                "소금을 뿌려둔 갈치의 물기를 걷어 위에 올리고 나머지 양념장을 고루 얹는다",
                "냄비 가장자리로 물 1컵을 넣고 불에 올려 끓인다",
                "끓어오르면 중간 불로 줄이고 대파와 풋고추, 홍고추를 넣는다",
                "양념장을 끼얹어 간이 고루 들도록 하면서, 국물이 거의 없어질 때까지 20분 동안 뚜껑을 열고 조린다",

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
                "감자 4개(600g)",
                "애호박 90g",
                "감자 전분 1큰술",
                "물 2컵(500ml)",
                "소금 ½작은술",
                "식용유",

                "초간장",
                "간장 2큰술",
                "물 1큰술",
                "식초 1큰술",
                "고춧가루 ½큰술",
                "풋고추 1개",

            ],
            preparation: [
                "감자는 껍질을 벗기고 강판(블렌더)에 곱게 간다",
                "애호박은 씻어서 채 썬다",
                "간장과 물, 식초, 고춧가루를 섞고 풋고추를 잘게 다져 넣어 양념장을 만든다",
            ],
            cooking: [
                "감자 간 것에 애호박을 섞고 물과 소금, 감자 전분을 넣어 반죽한다",
                "뜨겁게 달군 팬에 식용유를 두르고 반죽을 한 국자씩 떠서 얇고 동그랗게 편다",
                "전이 익어 투명해지면 뒤집어서 노릇하게 지진다",
                "접시에 담고 양념장을 곁들여 낸다",
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
                "감자는 껍질을 벗기고 2.5cm 폭의 주사위 모양으로 썰어 물에 담가둔다",  
                "풋고추는 1cm 두께로 동글게 썰고 물에 헹구어 씨를 뺀다",

            ],
            cooking: [
                "감자는 체에 밭쳐 물을 빼고 키친타월로 물기를 없앤다",  
                "뜨겁게 달군 냄비에 식용유 2큰술을 두르고 감자를 넣어 5분 동안 볶는다",  
                "간장, 설탕을 넣고 잠시 볶다가 물 ½컵을 넣고 뚜껑을 덮어 10분 동안 중간 불에서 조린다",  
                "썰어놓은 풋고추를 넣고 통깨와 참기름을 넣은 후 불을 끈다",

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
                "멥쌀과 찹쌀은 깨끗하게 씻어서 20분 정도 불린 뒤 체에 밭쳐 물기를 뺀다",  
                "곤드레나물은 미지근한 물에 1시간쯤 불렸다가 물 3컵을 넣고 약한 불에서 30분 정도 푹 삶은 뒤 물기를 꼭 짠다",  
                "삶은 곤드레나물에 국간장과 들기름을 넣고 무친다",  
                "국간장에 나머지 재료를 섞어서 양념장을 만든다",

            ],
            cooking: [
                "뜨겁게 달군 냄비에 들기름을 두르고 양념한 곤드레나물을 넣어 중간 불에서 10분 정도 볶다가 불린 쌀을 넣고 같이 볶는다",  
                "물 3컵을 붓고 끓어오르면 중간 불에서 밥물이 자작해질 때까지 끓인다",  
                "밥물이 잦아들면 약한 불로 줄여서 10분 정도 뜸을 들인다",  
                "밥을 고루 섞어 그릇에 담고 양념장을 곁들여 낸다",

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
                "곱창은 겉의 기름을 가위로 제거하고 손으로 얇은 막을 벗긴 다음 젓가락을 이용해 뒤집는다",  
                "뒤집은 곱창에 밀가루와 굵은소금을 넣고 바락바락 주물러서 찬물에 여러 번 헹군다",  
                "곱창에 소금, 후춧가루, 청주를 골고루 뿌린 후 냉장실에 30분 동안 재워둔다",  
                "감자는 0.6cm 두께로 썰어 물에 헹군다",  
                "부추는 4cm 길이로 썰고, 양파는 얇게 채 썬다",  
                "고춧가루에 나머지 재료를 섞어서 부추생채 양념을 만든다",  
                "부추와 양파를 섞어 부추생채 양념을 넣고 버무린다",

            ],
            cooking: [
                "뜨겁게 달군 팬에 식용유를 두르고 곱창을 노릇하게 굽는다",  
                "감자와 마늘도 굽는다",  
                "구운 곱창을 접시에 담고 부추생채, 구운 감자와 마늘을 함께 담는다",  
                "소금장을 곁들여 찍어 먹는다",

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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Soy_sauce_2.jpg/640px-Soy_sauce_2.jpg",
        category: "한식",
        recipe: {
            ingredients: [
                "메주 1말(콩 8㎏, 보통 크기 3덩이), 굵은소금 6~7되(480~560g), 물 40컵(10L), 숯·마른 고추·대추 약간씩",
            ],
            preparation: [
                "잘 띄운 메주를 솔로 깨끗이 씻어 햇볕에 말린다.",
                "장 담그기 하루 전날 항아리 위에 소금 소쿠리를 얹고 분량의 물을 부어서 가라앉힌다. 염도는 18~20보메가 적당한데, 달걀을 띄워서 반쯤 잠기는 정도다.",
            ],
            cooking: [
                "항아리에 메주를 넣고 소금물을 붓는다.",
                "항아리에 숯, 마른 고추, 대추를 3∼4개씩 띄운다.",
                "40~60일 동안 숙성시켜서 메주와 날간장을 분리한다..",
                "날간장은 냄비에 담아 약불에서 끓여 간장으로 쓰고, 메주는 으깨고 소금을 섞어 된장을 담근다.",
            ]
        }
    },
    {
        name: "간장게장",
        image: "https://cdn.oasis.co.kr:48581/product/52477/thumb/thumb_52477680446b5-5a05-4450-b778-1ae2c979ee38.jpg",
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
        image: "https://recipe1.ezmember.co.kr/cache/recipe/2017/03/29/ac0be444d09a260d6fc06001eac0adb21.jpg",
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
        image: "https://i.namu.wiki/i/GY1CyS2UkzjpGyPNPrJbX_eZps0Ps9Ly6M64KxQRWNqK9kZ5QL-v2TbOfY5gOHQi3QsWxpm3Ja-PW_YO9OvmpQ.webp",
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
        image: "https://i.namu.wiki/i/Ve_R4NNlzKMCcUDyUm96IQQwRMrg1RDRVVfak3F_ZPybsGgf6yjal8R0HGlt_T4VM_NGXL2h5it9vlCP8L_HUQ.webp",
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
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Gimbap_%28pixabay%29.jpg",
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
        image: "https://oasisprodproduct.edge.naverncp.com/56792/detail/0_876198e2-bb16-47dc-969e-532e84791cc1.jpg",
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
        image: "https://recipe1.ezmember.co.kr/cache/recipe/2017/03/14/cfdf8763c961603d5d33a3fada2c4df71.jpg",
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
        image: "https://i.ytimg.com/vi/OPo_j3jDMeM/maxresdefault.jpg",
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
        image: "https://recipe1.ezmember.co.kr/cache/recipe/2017/04/13/f51cef0c04d2e44872bf41aef97eb2741.jpg",
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
    // 일식
    {
        name: "오니기리",
        image: "",
        category: "일식",
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
        name: "돈부리",
        image: "",
        category: "일식",
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
        name: "카마메시",
        image: "",
        category: "일식",
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
        name: "스시",
        image: "",
        category: "일식",
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
        name: "오차즈케",
        image: "",
        category: "일식",
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
        name: "카테메싵",
        image: "",
        category: "일식",
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
        name: "우동",
        image: "",
        category: "일식",
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
        name: "야끼우동",
        image: "",
        category: "일식",
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
        name: "소바",
        image: "",
        category: "일식",
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
        name: "야끼소바",
        image: "",
        category: "일식",
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
        name: "라멘",
        image: "",
        category: "일식",
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
        name: "오코노미야끼",
        image: "",
        category: "일식",
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
        name: "타코야끼",
        image: "",
        category: "일식",
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
        name: "돈돈야끼",
        image: "",
        category: "일식",
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
        name: "덴뿌라",
        image: "",
        category: "일식",
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
        name: "샤브샤브",
        image: "",
        category: "일식",
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
        name: "스키야끼",
        image: "",
        category: "일식",
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
        name: "부타나베",
        image: "",
        category: "일식",
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
        name: "모츠나베",
        image: "",
        category: "일식",
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
        name: "사시미",
        image: "",
        category: "일식",
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
        name: "타다끼",
        image: "",
        category: "일식",
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
        name: "야키토리",
        image: "",
        category: "일식",
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
        name: "치킨난반",
        image: "",
        category: "일식",
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
        name: "가라아게",
        image: "",
        category: "일식",
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
        name: "니쿠자가",
        image: "",
        category: "일식",
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
        name: "도테야키",
        image: "",
        category: "일식",
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
        name: "라후테",
        image: "",
        category: "일식",
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
        name: "오히타시",
        image: "",
        category: "일식",
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
        name: "낫또",
        image: "",
        category: "일식",
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
        name: "우메보시",
        image: "",
        category: "일식",
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
        name: "쿠사야",
        image: "",
        category: "일식",
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
        name: "가츠동",
        image: "",
        category: "일식",
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
        name: "규동",
        image: "",
        category: "일식",
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
        name: "오야코동",
        image: "",
        category: "일식",
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
        name: "텐동",
        image: "",
        category: "일식",
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
        name: "카레동",
        image: "",
        category: "일식",
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
        name: "사케동",
        image: "",
        category: "일식",
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
        name: "아나고동",
        image: "",
        category: "일식",
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
        name: "키츠네동",
        image: "",
        category: "일식",
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
        name: "다케동",
        image: "",
        category: "일식",
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
        name: "미소시루",
        image: "",
        category: "일식",
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
        name: "다이후쿠",
        image: "",
        category: "일식",
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
        name: "모찌",
        image: "",
        category: "일식",
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
    // 중식
    {
        name: "양장피",
        image: "",
        category: "일식",
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
        name: "마파두부",
        image: "",
        category: "일식",
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
        name: "고추잡채",
        image: "",
        category: "일식",
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
        name: "팔진초면",
        image: "",
        category: "일식",
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
        name: "청경채소고기볶음",
        image: "",
        category: "일식",
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
        name: "연복풍",
        image: "",
        category: "중식",
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
        name: "고추잡채",
        image: "",
        category: "중식",
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
        name: "고추잡채",
        image: "",
        category: "중식",
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
        name: "회과육",
        image: "",
        category: "중식",
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
        name: "유산슬",
        image: "",
        category: "중식",
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
        name: "고추잡채",
        image: "",
        category: "일식",
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
        name: "고추잡채",
        image: "",
        category: "일식",
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
        name: "고추잡채",
        image: "",
        category: "일식",
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
        name: "고추잡채",
        image: "",
        category: "일식",
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
        name: "고추잡채",
        image: "",
        category: "일식",
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
        name: "고추잡채",
        image: "",
        category: "일식",
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
        name: "고추잡채",
        image: "",
        category: "일식",
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
        name: "고추잡채",
        image: "",
        category: "일식",
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
        name: "고추잡채",
        image: "",
        category: "일식",
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
        name: "고추잡채",
        image: "",
        category: "일식",
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
        name: "고추잡채",
        image: "",
        category: "일식",
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
        name: "고추잡채",
        image: "",
        category: "일식",
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
        name: "고추잡채",
        image: "",
        category: "일식",
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
        name: "고추잡채",
        image: "",
        category: "일식",
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
        name: "고추잡채",
        image: "",
        category: "일식",
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
        name: "고추잡채",
        image: "",
        category: "일식",
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
        name: "고추잡채",
        image: "",
        category: "일식",
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
        name: "고추잡채",
        image: "",
        category: "일식",
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
        name: "고추잡채",
        image: "",
        category: "일식",
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
        name: "고추잡채",
        image: "",
        category: "일식",
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
        name: "고추잡채",
        image: "",
        category: "일식",
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
        name: "고추잡채",
        image: "",
        category: "일식",
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
        name: "고추잡채",
        image: "",
        category: "일식",
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
        name: "고추잡채",
        image: "",
        category: "일식",
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
        name: "고추잡채",
        image: "",
        category: "일식",
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
        name: "고추잡채",
        image: "",
        category: "일식",
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
    

    
];

export default foods;