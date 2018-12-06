/* eslint-disable quotes */
var province = new Array()
province["0"] = [
  { ProvinceId: "340000", ProvinceName: "安徽", FirstCode: "A" },
  { ProvinceId: "820000", ProvinceName: "澳门", FirstCode: "A" },
  { ProvinceId: "110000", ProvinceName: "北京", FirstCode: "B" },
  { ProvinceId: "500000", ProvinceName: "重庆", FirstCode: "C" },
  { ProvinceId: "350000", ProvinceName: "福建", FirstCode: "F" },
  { ProvinceId: "440000", ProvinceName: "广东", FirstCode: "G" },
  { ProvinceId: "450000", ProvinceName: "广西", FirstCode: "G" },
  { ProvinceId: "520000", ProvinceName: "贵州", FirstCode: "G" },
  { ProvinceId: "620000", ProvinceName: "甘肃", FirstCode: "G" },
  { ProvinceId: "460000", ProvinceName: "海南", FirstCode: "H" },
  { ProvinceId: "410000", ProvinceName: "河南", FirstCode: "H" },
  { ProvinceId: "420000", ProvinceName: "湖北", FirstCode: "H" },
  { ProvinceId: "430000", ProvinceName: "湖南", FirstCode: "H" },
  { ProvinceId: "130000", ProvinceName: "河北", FirstCode: "H" },
  { ProvinceId: "230000", ProvinceName: "黑龙江", FirstCode: "H" },
  { ProvinceId: "320000", ProvinceName: "江苏", FirstCode: "J" },
  { ProvinceId: "360000", ProvinceName: "江西", FirstCode: "J" },
  { ProvinceId: "220000", ProvinceName: "吉林", FirstCode: "J" },
  { ProvinceId: "210000", ProvinceName: "辽宁", FirstCode: "L" },
  { ProvinceId: "150000", ProvinceName: "内蒙古", FirstCode: "N" },
  { ProvinceId: "640000", ProvinceName: "宁夏", FirstCode: "N" },
  { ProvinceId: "630000", ProvinceName: "青海", FirstCode: "Q" },
  { ProvinceId: "610000", ProvinceName: "陕西", FirstCode: "S" },
  { ProvinceId: "510000", ProvinceName: "四川", FirstCode: "S" },
  { ProvinceId: "310000", ProvinceName: "上海", FirstCode: "S" },
  { ProvinceId: "140000", ProvinceName: "山西", FirstCode: "S" },
  { ProvinceId: "370000", ProvinceName: "山东", FirstCode: "S" },
  { ProvinceId: "120000", ProvinceName: "天津", FirstCode: "T" },
  { ProvinceId: "710000", ProvinceName: "台湾", FirstCode: "T" },
  { ProvinceId: "810000", ProvinceName: "香港", FirstCode: "X" },
  { ProvinceId: "650000", ProvinceName: "新疆", FirstCode: "X" },
  { ProvinceId: "540000", ProvinceName: "西藏", FirstCode: "X" },
  { ProvinceId: "530000", ProvinceName: "云南", FirstCode: "Y" },
  { ProvinceId: "330000", ProvinceName: "浙江", FirstCode: "Z" }]
var city = new Array()

city["620000"] = [{ CityId: 620100, CityName: "兰州", FirstCode: "G" }, { CityId: 620200, CityName: "嘉峪关", FirstCode: "G" }, { CityId: 620300, CityName: "金昌", FirstCode: "G" }, { CityId: 620400, CityName: "白银", FirstCode: "G" }, { CityId: 620500, CityName: "天水", FirstCode: "G" }, { CityId: 620600, CityName: "武威", FirstCode: "G" }, { CityId: 620700, CityName: "张掖", FirstCode: "G" }, { CityId: 620800, CityName: "平凉", FirstCode: "G" }, { CityId: 620900, CityName: "酒泉", FirstCode: "G" }, { CityId: 621000, CityName: "庆阳", FirstCode: "G" }, { CityId: 621100, CityName: "定西", FirstCode: "G" }, { CityId: 621200, CityName: "陇南", FirstCode: "G" }, { CityId: 622900, CityName: "临夏", FirstCode: "G" }, { CityId: 623000, CityName: "甘南", FirstCode: "G" }]
city["370000"] = [{ CityId: 370100, CityName: "济南", FirstCode: "S" }, { CityId: 370200, CityName: "青岛", FirstCode: "S" }, { CityId: 370300, CityName: "淄博", FirstCode: "S" }, { CityId: 370400, CityName: "枣庄", FirstCode: "S" }, { CityId: 370500, CityName: "东营", FirstCode: "S" }, { CityId: 370600, CityName: "烟台", FirstCode: "S" }, { CityId: 370700, CityName: "潍坊", FirstCode: "S" }, { CityId: 370800, CityName: "济宁", FirstCode: "S" }, { CityId: 370900, CityName: "泰安", FirstCode: "S" }, { CityId: 371000, CityName: "威海", FirstCode: "S" }, { CityId: 371100, CityName: "日照", FirstCode: "S" }, { CityId: 371200, CityName: "莱芜", FirstCode: "S" }, { CityId: 371300, CityName: "临沂", FirstCode: "S" }, { CityId: 371400, CityName: "德州", FirstCode: "S" }, { CityId: 371500, CityName: "聊城", FirstCode: "S" }, { CityId: 371600, CityName: "滨州", FirstCode: "S" }, { CityId: 371700, CityName: "菏泽", FirstCode: "S" }]
city["320000"] = [{ CityId: 320100, CityName: "南京", FirstCode: "J" }, { CityId: 320200, CityName: "无锡", FirstCode: "J" }, { CityId: 320300, CityName: "徐州", FirstCode: "J" }, { CityId: 320400, CityName: "常州", FirstCode: "J" }, { CityId: 320500, CityName: "苏州", FirstCode: "J" }, { CityId: 320600, CityName: "南通", FirstCode: "J" }, { CityId: 320700, CityName: "连云港", FirstCode: "J" }, { CityId: 320800, CityName: "淮安", FirstCode: "J" }, { CityId: 320900, CityName: "盐城", FirstCode: "J" }, { CityId: 321000, CityName: "扬州", FirstCode: "J" }, { CityId: 321100, CityName: "镇江", FirstCode: "J" }, { CityId: 321200, CityName: "泰州", FirstCode: "J" }, { CityId: 321300, CityName: "宿迁", FirstCode: "J" }]
city["110000"] = [{ CityId: 110100, CityName: "北京", FirstCode: "B" }]
city["530000"] = [{ CityId: 530100, CityName: "昆明", FirstCode: "Y" }, { CityId: 530300, CityName: "曲靖", FirstCode: "Y" }, { CityId: 530400, CityName: "玉溪", FirstCode: "Y" }, { CityId: 530500, CityName: "保山", FirstCode: "Y" }, { CityId: 530600, CityName: "昭通", FirstCode: "Y" }, { CityId: 530700, CityName: "丽江", FirstCode: "Y" }, { CityId: 530800, CityName: "普洱", FirstCode: "Y" }, { CityId: 530900, CityName: "临沧", FirstCode: "Y" }, { CityId: 532300, CityName: "楚雄", FirstCode: "Y" }, { CityId: 532500, CityName: "红河", FirstCode: "Y" }, { CityId: 532600, CityName: "文山", FirstCode: "Y" }, { CityId: 532800, CityName: "西双版纳", FirstCode: "Y" }, { CityId: 532900, CityName: "大理", FirstCode: "Y" }, { CityId: 533100, CityName: "德宏", FirstCode: "Y" }, { CityId: 533300, CityName: "怒江", FirstCode: "Y" }, { CityId: 533400, CityName: "迪庆", FirstCode: "Y" }]
city["460000"] = [{ CityId: 460100, CityName: "海口", FirstCode: "H" }, { CityId: 460200, CityName: "三亚", FirstCode: "H" }, { CityId: 469001, CityName: "五指山", FirstCode: "H" }, { CityId: 469002, CityName: "琼海", FirstCode: "H" }, { CityId: 460400, CityName: "儋州", FirstCode: "H" }, { CityId: 469005, CityName: "文昌", FirstCode: "H" }, { CityId: 469006, CityName: "万宁", FirstCode: "H" }, { CityId: 469007, CityName: "东方", FirstCode: "H" }, { CityId: 469021, CityName: "定安", FirstCode: "H" }, { CityId: 469022, CityName: "屯昌", FirstCode: "H" }, { CityId: 469023, CityName: "澄迈", FirstCode: "H" }, { CityId: 469024, CityName: "临高", FirstCode: "H" }, { CityId: 469025, CityName: "白沙", FirstCode: "H" }, { CityId: 469026, CityName: "昌江", FirstCode: "H" }, { CityId: 469027, CityName: "乐东", FirstCode: "H" }, { CityId: 469028, CityName: "陵水", FirstCode: "H" }, { CityId: 469029, CityName: "保亭", FirstCode: "H" }, { CityId: 469030, CityName: "琼中", FirstCode: "H" }, { CityId: 460300, CityName: "三沙", FirstCode: "H" }]
city["330000"] = [{ CityId: 330100, CityName: "杭州", FirstCode: "Z" }, { CityId: 330200, CityName: "宁波", FirstCode: "Z" }, { CityId: 330300, CityName: "温州", FirstCode: "Z" }, { CityId: 330400, CityName: "嘉兴", FirstCode: "Z" }, { CityId: 330500, CityName: "湖州", FirstCode: "Z" }, { CityId: 330600, CityName: "绍兴", FirstCode: "Z" }, { CityId: 330700, CityName: "金华", FirstCode: "Z" }, { CityId: 330800, CityName: "衢州", FirstCode: "Z" }, { CityId: 330900, CityName: "舟山", FirstCode: "Z" }, { CityId: 331000, CityName: "台州", FirstCode: "Z" }, { CityId: 331100, CityName: "丽水", FirstCode: "Z" }]
city["310000"] = [{ CityId: 310100, CityName: "上海", FirstCode: "S" }]
city["120000"] = [{ CityId: 120100, CityName: "天津", FirstCode: "T" }]
city["610000"] = [{ CityId: 610100, CityName: "西安", FirstCode: "S" }, { CityId: 610200, CityName: "铜川", FirstCode: "S" }, { CityId: 610300, CityName: "宝鸡", FirstCode: "S" }, { CityId: 610400, CityName: "咸阳", FirstCode: "S" }, { CityId: 610500, CityName: "渭南", FirstCode: "S" }, { CityId: 610600, CityName: "延安", FirstCode: "S" }, { CityId: 610700, CityName: "汉中", FirstCode: "S" }, { CityId: 610800, CityName: "榆林", FirstCode: "S" }, { CityId: 610900, CityName: "安康", FirstCode: "S" }, { CityId: 611000, CityName: "商洛", FirstCode: "S" }]
city["910000"] = [{ CityId: 910100, CityName: "海外", FirstCode: "H" }]
city["650000"] = [{ CityId: 650100, CityName: "乌鲁木齐", FirstCode: "X" }, { CityId: 650200, CityName: "克拉玛依", FirstCode: "X" }, { CityId: 650400, CityName: "吐鲁番", FirstCode: "X" }, { CityId: 650500, CityName: "哈密", FirstCode: "X" }, { CityId: 652300, CityName: "昌吉", FirstCode: "X" }, { CityId: 652700, CityName: "博尔塔拉", FirstCode: "X" }, { CityId: 652800, CityName: "巴音郭楞", FirstCode: "X" }, { CityId: 652900, CityName: "阿克苏", FirstCode: "X" }, { CityId: 653000, CityName: "克孜勒苏", FirstCode: "X" }, { CityId: 653100, CityName: "喀什", FirstCode: "X" }, { CityId: 653200, CityName: "和田", FirstCode: "X" }, { CityId: 654000, CityName: "伊犁", FirstCode: "X" }, { CityId: 654200, CityName: "塔城", FirstCode: "X" }, { CityId: 654300, CityName: "阿勒泰", FirstCode: "X" }, { CityId: 659001, CityName: "石河子", FirstCode: "X" }, { CityId: 659002, CityName: "阿拉尔", FirstCode: "X" }, { CityId: 659003, CityName: "图木舒克", FirstCode: "X" }, { CityId: 659004, CityName: "五家渠", FirstCode: "X" }]
city["520000"] = [{ CityId: 520100, CityName: "贵阳", FirstCode: "G" }, { CityId: 520200, CityName: "六盘水", FirstCode: "G" }, { CityId: 520300, CityName: "遵义", FirstCode: "G" }, { CityId: 520400, CityName: "安顺", FirstCode: "G" }, { CityId: 520600, CityName: "铜仁", FirstCode: "G" }, { CityId: 522300, CityName: "黔西南", FirstCode: "G" }, { CityId: 520500, CityName: "毕节", FirstCode: "G" }, { CityId: 522600, CityName: "黔东南", FirstCode: "G" }, { CityId: 522700, CityName: "黔南", FirstCode: "G" }]
city["340000"] = [{ CityId: 340100, CityName: "合肥", FirstCode: "A" }, { CityId: 340200, CityName: "芜湖", FirstCode: "A" }, { CityId: 340300, CityName: "蚌埠", FirstCode: "A" }, { CityId: 340400, CityName: "淮南", FirstCode: "A" }, { CityId: 340500, CityName: "马鞍山", FirstCode: "A" }, { CityId: 340600, CityName: "淮北", FirstCode: "A" }, { CityId: 340700, CityName: "铜陵", FirstCode: "A" }, { CityId: 340800, CityName: "安庆", FirstCode: "A" }, { CityId: 341000, CityName: "黄山", FirstCode: "A" }, { CityId: 341100, CityName: "滁州", FirstCode: "A" }, { CityId: 341200, CityName: "阜阳", FirstCode: "A" }, { CityId: 341300, CityName: "宿州", FirstCode: "A" }, { CityId: 341500, CityName: "六安", FirstCode: "A" }, { CityId: 341600, CityName: "亳州", FirstCode: "A" }, { CityId: 341700, CityName: "池州", FirstCode: "A" }, { CityId: 341800, CityName: "宣城", FirstCode: "A" }]
city["820000"] = [{ CityId: 820100, CityName: "澳门", FirstCode: "A" }]
city["430000"] = [{ CityId: 430100, CityName: "长沙", FirstCode: "H" }, { CityId: 430200, CityName: "株洲", FirstCode: "H" }, { CityId: 430300, CityName: "湘潭", FirstCode: "H" }, { CityId: 430400, CityName: "衡阳", FirstCode: "H" }, { CityId: 430500, CityName: "邵阳", FirstCode: "H" }, { CityId: 430600, CityName: "岳阳", FirstCode: "H" }, { CityId: 430700, CityName: "常德", FirstCode: "H" }, { CityId: 430800, CityName: "张家界", FirstCode: "H" }, { CityId: 430900, CityName: "益阳", FirstCode: "H" }, { CityId: 431000, CityName: "郴州", FirstCode: "H" }, { CityId: 431100, CityName: "永州", FirstCode: "H" }, { CityId: 431200, CityName: "怀化", FirstCode: "H" }, { CityId: 431300, CityName: "娄底", FirstCode: "H" }, { CityId: 433100, CityName: "湘西", FirstCode: "H" }]
city["130000"] = [{ CityId: 130100, CityName: "石家庄", FirstCode: "H" }, { CityId: 130200, CityName: "唐山", FirstCode: "H" }, { CityId: 130300, CityName: "秦皇岛", FirstCode: "H" }, { CityId: 130400, CityName: "邯郸", FirstCode: "H" }, { CityId: 130500, CityName: "邢台", FirstCode: "H" }, { CityId: 130600, CityName: "保定", FirstCode: "H" }, { CityId: 130700, CityName: "张家口", FirstCode: "H" }, { CityId: 130800, CityName: "承德", FirstCode: "H" }, { CityId: 130900, CityName: "沧州", FirstCode: "H" }, { CityId: 131000, CityName: "廊坊", FirstCode: "H" }, { CityId: 131100, CityName: "衡水", FirstCode: "H" }]
city["810000"] = [{ CityId: 810100, CityName: "香港", FirstCode: "X" }]
city["210000"] = [{ CityId: 210100, CityName: "沈阳", FirstCode: "L" }, { CityId: 210200, CityName: "大连", FirstCode: "L" }, { CityId: 210300, CityName: "鞍山", FirstCode: "L" }, { CityId: 210400, CityName: "抚顺", FirstCode: "L" }, { CityId: 210500, CityName: "本溪", FirstCode: "L" }, { CityId: 210600, CityName: "丹东", FirstCode: "L" }, { CityId: 210700, CityName: "锦州", FirstCode: "L" }, { CityId: 210800, CityName: "营口", FirstCode: "L" }, { CityId: 210900, CityName: "阜新", FirstCode: "L" }, { CityId: 211000, CityName: "辽阳", FirstCode: "L" }, { CityId: 211100, CityName: "盘锦", FirstCode: "L" }, { CityId: 211200, CityName: "铁岭", FirstCode: "L" }, { CityId: 211300, CityName: "朝阳", FirstCode: "L" }, { CityId: 211400, CityName: "葫芦岛", FirstCode: "L" }]
city["510000"] = [{ CityId: 510100, CityName: "成都", FirstCode: "S" }, { CityId: 510300, CityName: "自贡", FirstCode: "S" }, { CityId: 510400, CityName: "攀枝花", FirstCode: "S" }, { CityId: 510500, CityName: "泸州", FirstCode: "S" }, { CityId: 510600, CityName: "德阳", FirstCode: "S" }, { CityId: 510700, CityName: "绵阳", FirstCode: "S" }, { CityId: 510800, CityName: "广元", FirstCode: "S" }, { CityId: 510900, CityName: "遂宁", FirstCode: "S" }, { CityId: 511000, CityName: "内江", FirstCode: "S" }, { CityId: 511100, CityName: "乐山", FirstCode: "S" }, { CityId: 511300, CityName: "南充", FirstCode: "S" }, { CityId: 511400, CityName: "眉山", FirstCode: "S" }, { CityId: 511500, CityName: "宜宾", FirstCode: "S" }, { CityId: 511600, CityName: "广安", FirstCode: "S" }, { CityId: 511700, CityName: "达州", FirstCode: "S" }, { CityId: 511800, CityName: "雅安", FirstCode: "S" }, { CityId: 511900, CityName: "巴中", FirstCode: "S" }, { CityId: 512000, CityName: "资阳", FirstCode: "S" }, { CityId: 513200, CityName: "阿坝", FirstCode: "S" }, { CityId: 513300, CityName: "甘孜", FirstCode: "S" }, { CityId: 513400, CityName: "凉山", FirstCode: "S" }]
city["640000"] = [{ CityId: 640100, CityName: "银川", FirstCode: "N" }, { CityId: 640200, CityName: "石嘴山", FirstCode: "N" }, { CityId: 640300, CityName: "吴忠", FirstCode: "N" }, { CityId: 640400, CityName: "固原", FirstCode: "N" }, { CityId: 640500, CityName: "中卫", FirstCode: "N" }]
city["220000"] = [{ CityId: 220100, CityName: "长春", FirstCode: "J" }, { CityId: 220200, CityName: "吉林", FirstCode: "J" }, { CityId: 220300, CityName: "四平", FirstCode: "J" }, { CityId: 220400, CityName: "辽源", FirstCode: "J" }, { CityId: 220500, CityName: "通化", FirstCode: "J" }, { CityId: 220600, CityName: "白山", FirstCode: "J" }, { CityId: 220700, CityName: "松原", FirstCode: "J" }, { CityId: 220800, CityName: "白城", FirstCode: "J" }, { CityId: 222400, CityName: "延边", FirstCode: "J" }]
city["350000"] = [{ CityId: 350100, CityName: "福州", FirstCode: "F" }, { CityId: 350200, CityName: "厦门", FirstCode: "F" }, { CityId: 350300, CityName: "莆田", FirstCode: "F" }, { CityId: 350400, CityName: "三明", FirstCode: "F" }, { CityId: 350500, CityName: "泉州", FirstCode: "F" }, { CityId: 350600, CityName: "漳州", FirstCode: "F" }, { CityId: 350700, CityName: "南平", FirstCode: "F" }, { CityId: 350800, CityName: "龙岩", FirstCode: "F" }, { CityId: 350900, CityName: "宁德", FirstCode: "F" }]
city["420000"] = [{ CityId: 420100, CityName: "武汉", FirstCode: "H" }, { CityId: 420200, CityName: "黄石", FirstCode: "H" }, { CityId: 420300, CityName: "十堰", FirstCode: "H" }, { CityId: 420500, CityName: "宜昌", FirstCode: "H" }, { CityId: 420600, CityName: "襄阳", FirstCode: "H" }, { CityId: 420700, CityName: "鄂州", FirstCode: "H" }, { CityId: 420800, CityName: "荆门", FirstCode: "H" }, { CityId: 420900, CityName: "孝感", FirstCode: "H" }, { CityId: 421000, CityName: "荆州", FirstCode: "H" }, { CityId: 421100, CityName: "黄冈", FirstCode: "H" }, { CityId: 421200, CityName: "咸宁", FirstCode: "H" }, { CityId: 421300, CityName: "随州", FirstCode: "H" }, { CityId: 422800, CityName: "恩施", FirstCode: "H" }, { CityId: 429004, CityName: "仙桃", FirstCode: "H" }, { CityId: 429005, CityName: "潜江", FirstCode: "H" }, { CityId: 429006, CityName: "天门", FirstCode: "H" }, { CityId: 429021, CityName: "神农架", FirstCode: "H" }]
city["440000"] = [{ CityId: 440100, CityName: "广州", FirstCode: "G" }, { CityId: 440200, CityName: "韶关", FirstCode: "G" }, { CityId: 440300, CityName: "深圳", FirstCode: "G" }, { CityId: 440400, CityName: "珠海", FirstCode: "G" }, { CityId: 440500, CityName: "汕头", FirstCode: "G" }, { CityId: 440600, CityName: "佛山", FirstCode: "G" }, { CityId: 440700, CityName: "江门", FirstCode: "G" }, { CityId: 440800, CityName: "湛江", FirstCode: "G" }, { CityId: 440900, CityName: "茂名", FirstCode: "G" }, { CityId: 441200, CityName: "肇庆", FirstCode: "G" }, { CityId: 441300, CityName: "惠州", FirstCode: "G" }, { CityId: 441400, CityName: "梅州", FirstCode: "G" }, { CityId: 441500, CityName: "汕尾", FirstCode: "G" }, { CityId: 441600, CityName: "河源", FirstCode: "G" }, { CityId: 441700, CityName: "阳江", FirstCode: "G" }, { CityId: 441800, CityName: "清远", FirstCode: "G" }, { CityId: 441900, CityName: "东莞", FirstCode: "G" }, { CityId: 442000, CityName: "中山", FirstCode: "G" }, { CityId: 445100, CityName: "潮州", FirstCode: "G" }, { CityId: 445200, CityName: "揭阳", FirstCode: "G" }, { CityId: 445300, CityName: "云浮", FirstCode: "G" }]
city["500000"] = [{ CityId: 500100, CityName: "重庆", FirstCode: "C" }]
city["140000"] = [{ CityId: 140100, CityName: "太原", FirstCode: "S" }, { CityId: 140200, CityName: "大同", FirstCode: "S" }, { CityId: 140300, CityName: "阳泉", FirstCode: "S" }, { CityId: 140400, CityName: "长治", FirstCode: "S" }, { CityId: 140500, CityName: "晋城", FirstCode: "S" }, { CityId: 140600, CityName: "朔州", FirstCode: "S" }, { CityId: 140700, CityName: "晋中", FirstCode: "S" }, { CityId: 140800, CityName: "运城", FirstCode: "S" }, { CityId: 140900, CityName: "忻州", FirstCode: "S" }, { CityId: 141000, CityName: "临汾", FirstCode: "S" }, { CityId: 141100, CityName: "吕梁", FirstCode: "S" }]
city["360000"] = [{ CityId: 360100, CityName: "南昌", FirstCode: "J" }, { CityId: 360200, CityName: "景德镇", FirstCode: "J" }, { CityId: 360300, CityName: "萍乡", FirstCode: "J" }, { CityId: 360400, CityName: "九江", FirstCode: "J" }, { CityId: 360500, CityName: "新余", FirstCode: "J" }, { CityId: 360600, CityName: "鹰潭", FirstCode: "J" }, { CityId: 360700, CityName: "赣州", FirstCode: "J" }, { CityId: 360800, CityName: "吉安", FirstCode: "J" }, { CityId: 360900, CityName: "宜春", FirstCode: "J" }, { CityId: 361000, CityName: "抚州", FirstCode: "J" }, { CityId: 361100, CityName: "上饶", FirstCode: "J" }]
city["230000"] = [{ CityId: 230100, CityName: "哈尔滨", FirstCode: "H" }, { CityId: 230200, CityName: "齐齐哈尔", FirstCode: "H" }, { CityId: 230300, CityName: "鸡西", FirstCode: "H" }, { CityId: 230400, CityName: "鹤岗", FirstCode: "H" }, { CityId: 230500, CityName: "双鸭山", FirstCode: "H" }, { CityId: 230600, CityName: "大庆", FirstCode: "H" }, { CityId: 230700, CityName: "伊春", FirstCode: "H" }, { CityId: 230800, CityName: "佳木斯", FirstCode: "H" }, { CityId: 230900, CityName: "七台河", FirstCode: "H" }, { CityId: 231000, CityName: "牡丹江", FirstCode: "H" }, { CityId: 231100, CityName: "黑河", FirstCode: "H" }, { CityId: 231200, CityName: "绥化", FirstCode: "H" }, { CityId: 232700, CityName: "大兴安岭", FirstCode: "H" }]
city["630000"] = [{ CityId: 630100, CityName: "西宁", FirstCode: "Q" }, { CityId: 630200, CityName: "海东", FirstCode: "Q" }, { CityId: 632200, CityName: "海北", FirstCode: "Q" }, { CityId: 632300, CityName: "黄南", FirstCode: "Q" }, { CityId: 632500, CityName: "海南", FirstCode: "Q" }, { CityId: 632600, CityName: "果洛", FirstCode: "Q" }, { CityId: 632700, CityName: "玉树", FirstCode: "Q" }, { CityId: 632800, CityName: "海西", FirstCode: "Q" }]
city["410000"] = [{ CityId: 410100, CityName: "郑州", FirstCode: "H" }, { CityId: 410200, CityName: "开封", FirstCode: "H" }, { CityId: 410300, CityName: "洛阳", FirstCode: "H" }, { CityId: 410400, CityName: "平顶山", FirstCode: "H" }, { CityId: 410500, CityName: "安阳", FirstCode: "H" }, { CityId: 410600, CityName: "鹤壁", FirstCode: "H" }, { CityId: 410700, CityName: "新乡", FirstCode: "H" }, { CityId: 410800, CityName: "焦作", FirstCode: "H" }, { CityId: 410900, CityName: "濮阳", FirstCode: "H" }, { CityId: 411000, CityName: "许昌", FirstCode: "H" }, { CityId: 411100, CityName: "漯河", FirstCode: "H" }, { CityId: 411200, CityName: "三门峡", FirstCode: "H" }, { CityId: 411300, CityName: "南阳", FirstCode: "H" }, { CityId: 411400, CityName: "商丘", FirstCode: "H" }, { CityId: 411500, CityName: "信阳", FirstCode: "H" }, { CityId: 411600, CityName: "周口", FirstCode: "H" }, { CityId: 411700, CityName: "驻马店", FirstCode: "H" }, { CityId: 419001, CityName: "济源市", FirstCode: "H" }]
city["710000"] = [{ CityId: 710100, CityName: "台湾", FirstCode: "T" }]
city["150000"] = [{ CityId: 150100, CityName: "呼和浩特", FirstCode: "N" }, { CityId: 150200, CityName: "包头", FirstCode: "N" }, { CityId: 150300, CityName: "乌海", FirstCode: "N" }, { CityId: 150400, CityName: "赤峰", FirstCode: "N" }, { CityId: 150500, CityName: "通辽", FirstCode: "N" }, { CityId: 150600, CityName: "鄂尔多斯", FirstCode: "N" }, { CityId: 150700, CityName: "呼伦贝尔", FirstCode: "N" }, { CityId: 150800, CityName: "巴彦淖尔", FirstCode: "N" }, { CityId: 150900, CityName: "乌兰察布", FirstCode: "N" }, { CityId: 152200, CityName: "兴安盟", FirstCode: "N" }, { CityId: 152500, CityName: "锡林郭勒盟", FirstCode: "N" }, { CityId: 152900, CityName: "阿拉善盟", FirstCode: "N" }]
city["540000"] = [{ CityId: 540100, CityName: "拉萨", FirstCode: "X" }, { CityId: 540300, CityName: "昌都", FirstCode: "X" }, { CityId: 540500, CityName: "山南", FirstCode: "X" }, { CityId: 540200, CityName: "日喀则", FirstCode: "X" }, { CityId: 542400, CityName: "那曲", FirstCode: "X" }, { CityId: 542500, CityName: "阿里", FirstCode: "X" }, { CityId: 540400, CityName: "林芝", FirstCode: "X" }]
city["450000"] = [{ CityId: 450100, CityName: "南宁", FirstCode: "G" }, { CityId: 450200, CityName: "柳州", FirstCode: "G" }, { CityId: 450300, CityName: "桂林", FirstCode: "G" }, { CityId: 450400, CityName: "梧州", FirstCode: "G" }, { CityId: 450500, CityName: "北海", FirstCode: "G" }, { CityId: 450600, CityName: "防城港", FirstCode: "G" }, { CityId: 450700, CityName: "钦州", FirstCode: "G" }, { CityId: 450800, CityName: "贵港", FirstCode: "G" }, { CityId: 450900, CityName: "玉林", FirstCode: "G" }, { CityId: 451000, CityName: "百色", FirstCode: "G" }, { CityId: 451100, CityName: "贺州", FirstCode: "G" }, { CityId: 451200, CityName: "河池", FirstCode: "G" }, { CityId: 451300, CityName: "来宾", FirstCode: "G" }, { CityId: 451400, CityName: "崇左", FirstCode: "G" }]

const getCityProvinceCode = function (res) {
  let provinceStr = res[0] // 省
  let cityStr = res[1] // 市
  var provinceId = 0
  var cityId = 0
  if (provinceStr.indexOf("北京") !== -1 || cityStr.indexOf("北京") !== -1) {
    return 110100
  } else if (provinceStr.indexOf("上海") !== -1 || cityStr.indexOf("上海") !== -1) {
    return 310100
  } else if (provinceStr.indexOf("重庆") !== -1 || cityStr.indexOf("重庆") !== -1) {
    return 500100
  } else if (provinceStr.indexOf("天津") !== -1 || cityStr.indexOf("天津") !== -1) {
    return 120100
  }
  for (var i = 0; i < province["0"].length; i++) {
    if (provinceStr.indexOf(province["0"][i].ProvinceName) !== -1) {
      provinceId = province["0"][i].ProvinceId
    }
  }
  if (city[provinceId]) {
    for (var j = 0; j < city[provinceId].length; j++) {
      if (cityStr.indexOf(city[provinceId][j].CityName) !== -1) {
        cityId = city[provinceId][j].CityId
      }
    }
  }
  if (cityId > 0) {
    return cityId
  }
  return provinceId
}
const getProvinceIndex = function (code) {
  for (var i = 0; i < province["0"].length; i++) {
    if (code.indexOf(province["0"][i].ProvinceId) !== -1) {
      return i
    }
  }
}
const getCityIndex = function (provinceId, code) {
  for (var i = 0; i < city[provinceId].length; i++) {
    if (code.indexOf(city[provinceId][i].CityId) !== -1) {
      return i
    }
  }
}
export {
  getCityProvinceCode,
  province,
  city,
  getProvinceIndex,
  getCityIndex
}
