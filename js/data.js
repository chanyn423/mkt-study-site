const SITE_DATA = {
  chapters: [
    {
      id: "ch1",
      title: "市場營銷的角色",
      shortTitle: "市場營銷",
      icon: "",
      color: "#1a73e8",
      points: [
        { title: "市場營銷的定義", qw: "解釋", marks: 4, keywords: ["創造", "交換", "價值", "需要", "慾望"], explanation: "個人或團體通過創造和交換價值來滿足需要與慾望的過程", example: "餐廳推出美味雲吞麵同奶茶，滿足顧客對港式小食的慾望", source: "課本 P.5 / 筆記 CH1" },
        { title: "市場營銷概念", qw: "解釋", marks: 4, keywords: ["目標市場", "需要", "競爭", "優越"], explanation: "識別目標市場需要，提供比競爭者更好滿足顧客的產品或服務", example: "顧客鍾意港式茶餐廳食物，餐廳就推出美味雲吞麵同奶茶", source: "課本 P.8 / 筆記 CH1" },
        { title: "市場營銷的重要性", qw: "解釋", marks: 6, keywords: ["顧客需要", "競爭", "市場變化", "持份者"], explanation: "幫助企業發現顧客需要、應對競爭、監測市場變化、建立持份者關係", example: "透過市場研究了解顧客對健康餐的趨勢", source: "課本 P.12 / 筆記 CH1" },
        { title: "市場營銷執行步驟", qw: "制訂", marks: 6, keywords: ["確認需要", "顧客購買", "滿意度", "利潤"], explanation: "確認顧客需要 → 顧客購買 → 顧客滿意 → 賺取利潤", example: "餐厅確認學生需要午餐 → 推出學生餐 → 顧客滿意 → 每日賣出100份", source: "課本 P.15 / 筆記 CH1" },
        { title: "市場營銷監控", qw: "制訂", marks: 4, keywords: ["標準", "量度", "比較", "糾正"], explanation: "設定表現標準 → 量度實際表現 → 與標準比較 → 找出偏差原因並糾正", example: "設定每週營業額目標80-90萬，實際只有70萬，就要查找原因", source: "課本 P.18 / 筆記 CH1" },
        { title: "市場營銷計劃過程", qw: "制訂", marks: 6, keywords: ["檢視", "SWOT", "目標", "細分", "策略", "計劃"], explanation: "檢視現時表現 → SWOT分析 → 設定可量度目標 → 選擇目標市場 → 設計策略 → 制訂市場營銷計劃", example: "IKEA分析自己嘅強項（環保慳位家具）同機會（香港屋細）", source: "課本 P.20 / 筆記 CH1" }
      ],
      examples: [
        { title: "餐廳市場營銷概念", scenario: "顧客鍾意港式茶餐廳食物", action: "餐廳推出美味雲吞麵同奶茶", result: "成功吸引目標顧客，提升營業額" },
        { title: "IKEA SWOT 分析", scenario: "IKEA進入香港市場", action: "強項：環保慳位家具；弱點：門店佈局；機會：香港屋細；威脅：租金高", result: "利用優勢抓緊香港市場機會" },
        { title: "學生午餐計劃", scenario: "餐廳想吸引學生顧客", action: "設定每日賣出100份學生午餐目標", result: "透過可量度目標監控表現" }
      ]
    },
    {
      id: "ch2",
      title: "市場研究",
      shortTitle: "市場研究",
      icon: "",
      color: "#0f9d58",
      points: [
        { title: "市場研究的定義", qw: "解釋", marks: 4, keywords: ["客觀", "系統", "收集數據", "市場決策"], explanation: "用客觀同系統嘅方法收集數據，幫助企業作出市場決策", example: "新公司委託顧問研究快餐顧客嘅口味偏好", source: "課本 P.30 / 筆記 CH2" },
        { title: "原始數據定義", qw: "解釋", marks: 2, keywords: ["特定目的", "首次", "最新"], explanation: "為咗是次研究目的而首次收集嘅數據", example: "公司自行進行問卷調查，收集顧客對新產品嘅意見", source: "課本 P.32 / 筆記 CH2" },
        { title: "次級數據定義", qw: "解釋", marks: 2, keywords: ["其他目的", "現有", "較舊"], explanation: "原本為其他目的而收集嘅現有數據", example: "《選擇》月刊嘅統計數據", source: "課本 P.33 / 筆記 CH2" },
        { title: "原始數據 vs 次級數據", qw: "比較", marks: 4, keywords: ["相關性", "時效性", "準確性", "成本"], explanation: "原始數據相關性同時效性更高，但成本較高；次級數據成本較低，但可能過時或唔太相關", example: "新產品推出要用原始數據；初步了解市場可用次級數據", source: "課本 P.34 / 筆記 CH2" },
        { title: "市場研究步驟", qw: "制訂", marks: 5, keywords: ["目標", "設計", "收集", "分析", "公佈"], explanation: "設定研究目標 → 設計數據收集方法 → 收集數據 → 分析數據 → 公佈結果", example: "先確定要研究咩，再決定用問卷定觀察", source: "課本 P.35 / 筆記 CH2" },
        { title: "調查研究法", qw: "解釋", marks: 4, keywords: ["問卷", "態度", "偏好", "可量化"], explanation: "用問卷系統地了解消費者嘅態度同偏好", example: "餐廳派發問卷問顧客對新菜式嘅睇法", source: "課本 P.38 / 筆記 CH2" },
        { title: "實驗研究法", qw: "解釋", marks: 4, keywords: ["變量", "因果關係", "科學"], explanation: "通過控制變量，解釋變量之間嘅因果關係", example: "測試唔同包裝顏色對銷量的影響", source: "課本 P.40 / 筆記 CH2" },
        { title: "觀察法", qw: "解釋", marks: 4, keywords: ["觀察", "行為", "不受影響"], explanation: "觀察人們嘅行為、情況，研究對象唔受影響", example: "神秘顧客觀察店員服務態度", source: "課本 P.42 / 筆記 CH2" },
        { title: "四種研究方法比較", qw: "比較", marks: 6, keywords: ["優點", "缺點", "適用情況"], explanation: "調查：可量化但費時；實驗：科學但昂貴；觀察：客觀但難推廣；定性：深入但難量化", example: "想做快速定量分析用問卷；想深入了解用訪談", source: "課本 P.44 / 筆記 CH2" },
        { title: "隨機抽樣", qw: "解釋", marks: 2, keywords: ["平等", "名單", "每個"], explanation: "每個樣本有相同被選中嘅機會", example: "從盒中抽卡片，每張卡片被抽中嘅機會相同", source: "課本 P.46 / 筆記 CH2" },
        { title: "便利抽樣", qw: "解釋", marks: 2, keywords: ["容易", "方便", "不平等"], explanation: "因為容易接觸而選擇嘅樣本", example: "街訪，訪問路過嘅人", source: "課本 P.47 / 筆記 CH2" },
        { title: "分層抽樣", qw: "解釋", marks: 2, keywords: ["分組", "每層", "隨機"], explanation: "將人口分成唔同層次，然後從每層隨機抽樣", example: "按年齡分組，然後從每組抽人", source: "課本 P.48 / 筆記 CH2" }
      ],
      examples: [
        { title: "快餐市場研究", scenario: "新公司想了解快餐顧客口味", action: "委托顧問公司進行問卷調查", result: "收集原始數據，了解顧客偏好" },
        { title: "《選擇》月刊數據", scenario: "現有市場數據", action: "參閱《選擇》月刊統計", result: "獲得次級數據，成本低但可能過時" },
        { title: "神秘顧客觀察", scenario: "連鎖餐廳想監控服務質素", action: "派神秘顧客到店觀察", result: "客觀了解店員真實表現" }
      ]
    },
    {
      id: "ch3",
      title: "消費者行為",
      shortTitle: "消費者行為",
      icon: "",
      color: "#e8710a",
      points: [
        { title: "消費者行為定義", qw: "解釋", marks: 4, keywords: ["搜尋", "購買", "使用", "評估"], explanation: "顧客在搜尋、購買、使用、評估產品或服務時嘅行為", example: "消費者買手機時嘅整個決策過程", source: "課本 P.55 / 筆記 CH3" },
        { title: "購買決策過程：觸發需求", qw: "制訂", marks: 2, keywords: ["內部", "外部", "刺激"], explanation: "內部刺激（感到肚餓）或外部刺激（見到廣告）觸發購買需要", example: "見到朋友用靚手機，自己都想買", source: "課本 P.58 / 筆記 CH3" },
        { title: "購買決策過程：搜集資料", qw: "制訂", marks: 2, keywords: ["個人", "商業", "公共"], explanation: "從個人來源、商業來源、公共來源搜集相關資料", example: "問朋友（個人）、睇廣告（商業）、睇評論（公共）", source: "課本 P.59 / 筆記 CH3" },
        { title: "購買決策過程：評估方案", qw: "制訂", marks: 2, keywords: ["特徵", "價格", "服務", "信譽"], explanation: "根據產品特徵、價格、服務、信譽、方便程度評估唔同方案", example: "比較唔同品牌手機嘅功能同價錢", source: "課本 P.60 / 筆記 CH3" },
        { title: "購買決策過程：購買決定", qw: "制訂", marks: 2, keywords: ["最高分", "環境", "人際"], explanation: "選擇最高分嘅方案，但可能受環境同人際因素影響", example: "本來想買A品牌，但朋友推薦B品牌，最後買咗B", source: "課本 P.61 / 筆記 CH3" },
        { title: "購買決策過程：購買後行為", qw: "制訂", marks: 2, keywords: ["滿意", "不滿意", "推薦", "拒絕"], explanation: "滿意會推薦畀人；不滿意會拒絕再買", example: "用過手機後覺得好，就推薦畀朋友", source: "課本 P.62 / 筆記 CH3" },
        { title: "影響消費決策：文化因素", qw: "解釋", marks: 4, keywords: ["文化", "價值觀", "習慣"], explanation: "文化、價值觀、習慣影響消費者嘅購買決定", example: "環保人士選擇再造紙，減少浪費", source: "課本 P.65 / 筆記 CH3" },
        { title: "影響消費決策：心理因素", qw: "解釋", marks: 4, keywords: ["動機", "感知", "學習", "態度"], explanation: "動機、感知、學習、信念與態度影響購買行為", example: "消費者對某品牌有好感，就會傾向買佢嘅產品", source: "課本 P.68 / 筆記 CH3" },
        { title: "個人消費者 vs 商業消費者", qw: "比較", marks: 6, keywords: ["關係", "複雜性", "價格敏感度", "需求性質"], explanation: "個人消費者：關係較簡單、決策較簡單、價格敏感度高；商業消費者：關係較複雜、決策較複雜、價格敏感度低", example: "個人買手機追求抵唔抵；公司買手機考慮大量採購同維修", source: "課本 P.72 / 筆記 CH3" },
        { title: "商業消費者決策過程", qw: "制訂", marks: 5, keywords: ["察覺問題", "描述需要", "尋找供應商", "選擇供應商", "評估表現"], explanation: "察覺問題 → 描述需要同規格 → 尋找供應商 → 選擇供應商並發出訂單 → 評估表現", example: "企業需要穩定寬頻，就去搵供應商傾", source: "課本 P.75 / 筆記 CH3" }
      ],
      examples: [
        { title: "買手機決策過程", scenario: "想買新手機", action: "搜集資料 → 比較品牌 → 決定買iPhone", result: "滿足需求" },
        { title: "環保購物", scenario: "環保人士購物", action: "選擇再造紙產品", result: "價值觀影響購買決定" },
        { title: "企業採購寬頻", scenario: "企業需要穩定寬頻", action: "尋找供應商 → 比較方案 → 簽約", result: "商業決策過程較複雜" }
      ]
    },
    {
      id: "ch4",
      title: "市場細分、目標市場、定位",
      shortTitle: "市場細分",
      icon: "",
      color: "#9334e6",
      points: [
        { title: "市場細分定義", qw: "解釋", marks: 4, keywords: ["獨特需要", "特徵", "消費模式", "小組"], explanation: "根據獨特需要、特徵同消費模式，將市場分成較小嘅小組", example: "服裝市場按性別分成男裝、女裝", source: "課本 P.85 / 筆記 CH4" },
        { title: "有效市場區分準則", qw: "制訂", marks: 5, keywords: ["可量度", "可接觸", "可行動", "可區別", "大規模"], explanation: "可量度（年齡可驗證）、可接觸（SMS聯絡）、可行動（宴會套餐）、可區別（男女裝不同）、大規模（西方大碼女裝市場）", example: "年龄可以用身分證驗證，就係可量度", source: "課本 P.88 / 筆記 CH4" },
        { title: "市場細分方法：地理", qw: "解釋", marks: 2, keywords: ["國家", "城市", "地區"], explanation: "按國家、城市、地區嚟細分市場", example: "香港、九龍、新界唔同地區嘅消費者", source: "課本 P.90 / 筆記 CH4" },
        { title: "市場細分方法：人口統計", qw: "解釋", marks: 2, keywords: ["年齡", "性別", "收入", "宗教"], explanation: "按年齡、性別、收入、宗教嚟細分市場", example: "按年齡分成兒童、青少年、成年人、長者", source: "課本 P.91 / 筆記 CH4" },
        { title: "無差異營銷策略", qw: "解釋", marks: 2, keywords: ["整個市場", "一種產品"], explanation: "用同一種產品服務成個市場", example: "自來水公司供應相同嘅水俾所有用戶", source: "課本 P.98 / 筆記 CH4" },
        { title: "差異營銷策略", qw: "解釋", marks: 2, keywords: ["多個市場", "多種產品"], explanation: "針對唔同市場推出唔同產品", example: "洗頭水推出去屑、滋潤、控油唔同配方", source: "課本 P.99 / 筆記 CH4" },
        { title: "集中營銷策略", qw: "解釋", marks: 2, keywords: ["一個市場", "專業化"], explanation: "專注一個或少數小市場", example: "公司只做男士護膚品", source: "課本 P.100 / 筆記 CH4" },
        { title: "三種目標市場策略比較", qw: "比較", marks: 6, keywords: ["成本", "顧客需要", "利潤風險", "資源分配"], explanation: "無差異：成本低但唔適合所有顧客；差異：成本高但覆蓋廣；集中：資源集中但風險高", example: "大公司用差異策略；小公司用集中策略", source: "課本 P.102 / 筆記 CH4" },
        { title: "定位步驟", qw: "制訂", marks: 3, keywords: ["競爭優勢", "選擇優勢", "傳達定位"], explanation: "識別競爭優勢 → 選擇適合優勢 → 傳達定位", example: "Bus公司定位為『最快點對點巴士服務』", source: "課本 P.105 / 筆記 CH4" }
      ],
      examples: [
        { title: "IKEA 市場細分", scenario: "IKEA進入香港市場", action: "按年齡、收入、生活方式細分", result: "針對都市小屋戶推出慳位家具" },
        { title: "洗頭水差異營銷", scenario: "洗頭水品牌", action: "推出去屑、滋潤、控油唔同配方", result: "滿足唔同顧客需要" },
        { title: "定位聲明", scenario: "茶飲品牌", action: "『為忙碌香港人，提供方便茶飲，唔沖泡都飲到天然健康茶』", result: "清晰傳達品牌定位" }
      ]
    },
    {
      id: "ch5",
      title: "市場營銷組合 (4P)",
      shortTitle: "4P 組合",
      icon: "",
      color: "#d93025",
      points: [
        { title: "產品定義", qw: "解釋", marks: 2, keywords: ["有形", "無形", "需要"], explanation: "有形產品同無形服務，滿足目標顧客需要", example: "手機（有形）同維修服務（無形）", source: "課本 P.120 / 筆記 CH5" },
        { title: "產品策略：增加產品種類", qw: "建議", marks: 2, keywords: ["款式", "選擇"], explanation: "增加唔同款式或選擇俾顧客", example: "手機推出唔同顏色同尺寸", source: "課本 P.122 / 筆記 CH5" },
        { title: "產品策略：品牌建立", qw: "建議", marks: 2, keywords: ["品牌", "識別", "信任"], explanation: "建立品牌名稱、標誌，增加顧客信任", example: "ADIDAS 標誌代表運動精神", source: "課本 P.125 / 筆記 CH5" },
        { title: "定價考慮因素：內部", qw: "解釋", marks: 4, keywords: ["目標", "成本", "組合"], explanation: "內部因素包括市場營銷目標、成本、其他營銷組合元素", example: "想生存就低價；想佔有市場就滲透定價", source: "課本 P.130 / 筆記 CH5" },
        { title: "定價考慮因素：外部", qw: "解釋", marks: 4, keywords: ["市場性質", "消費者能力", "競爭者"], explanation: "外部因素包括市場性質、消費者負擔能力、競爭者策略", example: "壟斷市場可以定價高；激烈競爭就要睇住對手", source: "課本 P.132 / 筆記 CH5" },
        { title: "撇脂定價法", qw: "解釋", marks: 2, keywords: ["高價", "彈性"], explanation: "新產品推出時定高價，從價格不敏感顧客賺取最大利潤", example: "新iPhone推出時定價高", source: "課本 P.135 / 筆記 CH5" },
        { title: "滲透定價法", qw: "解釋", marks: 2, keywords: ["低價", "市場佔有率"], explanation: "新產品推出時定低價，吸引價格敏感顧客，快速建立市場佔有率", example: "新品牌手機用低價搶市場", source: "課本 P.136 / 筆記 CH5" },
        { title: "直接分銷 vs 間接分銷", qw: "比較", marks: 4, keywords: ["成本", "關係", "控制", "專業"], explanation: "直接：成本可能高但控制強、關係好；間接：成本低但控制弱", example: "自己開零售店（直接）vs 經百貨公司銷售（間接）", source: "課本 P.140 / 筆記 CH5" },
        { title: "密集性分銷", qw: "解釋", marks: 2, keywords: ["最多", "方便"], explanation: "用最多渠道成員，讓產品到處都買得到", example: "汽水、零食在所有便利店都賣", source: "課本 P.145 / 筆記 CH5" },
        { title: "獨家性分銷", qw: "解釋", marks: 2, keywords: ["少數", "控制", "形象"], explanation: "喺特定地區用少數渠道成員，更好控制同建立形象", example: "豪華車只在指定經銷商賣", source: "課本 P.147 / 筆記 CH5" },
        { title: "推廣組合：廣告", qw: "解釋", marks: 2, keywords: ["大眾媒體", "傳播"], explanation: "用大眾媒體傳播產品信息", example: "電視廣告、網絡廣告", source: "課本 P.150 / 筆記 CH5" },
        { title: "推廣組合：銷售推廣", qw: "解釋", marks: 2, keywords: ["短期", "誘因"], explanation: "提供短期誘因鼓勵購買", example: "免費試堂、現金回贈、禮品", source: "課本 P.152 / 筆記 CH5" }
      ],
      examples: [
        { title: "新iPhone定價", scenario: "蘋果推出新iPhone", action: "用撇脂定價法，定高價", result: "從科技愛好者賺取利潤" },
        { title: "Emily手袋分銷", scenario: "Emily Limited 賣手袋", action: "比較直接開店 vs 經百貨公司銷售", result: "考慮客戶基礎、銷售控制、專業知識" },
        { title: "健身中心銷售推廣", scenario: "健身中心吸引新會員", action: "提供免費試堂", result: "短期誘因鼓勵嘗試" }
      ]
    },
    {
      id: "ch6",
      title: "產品生命週期 + 服務營銷",
      shortTitle: "PLC + 服務",
      icon: "",
      color: "#188038",
      points: [
        { title: "產品生命週期：介紹期", qw: "解釋", marks: 2, keywords: ["推出", "低銷售", "虧損"], explanation: "新產品剛推出市場，銷售低、推廣成本高、通常虧損", example: "COVID-19疫苗剛推出時", source: "課本 P.165 / 筆記 CH6" },
        { title: "產品生命週期：成長期", qw: "解釋", marks: 2, keywords: ["快速上升", "利潤增長", "競爭者增加"], explanation: "產品被廣泛接受，銷售快速上升，利潤增長，競爭者增加", example: "支付寶剛推出時", source: "課本 P.167 / 筆記 CH6" },
        { title: "產品生命週期：成熟期", qw: "解釋", marks: 2, keywords: ["高峰", "增長放緩", "很多競爭者"], explanation: "銷售達到高峰後增長放緩，競爭者最多", example: "智能電話市場而家就係成熟期", source: "課本 P.169 / 筆記 CH6" },
        { title: "產品生命週期：衰退期", qw: "解釋", marks: 2, keywords: ["銷售下降", "利潤下降", "競爭者減少"], explanation: "銷售同利潤都下降，競爭者開始退出", example: "iPhone 6、7 而家就係衰退期", source: "課本 P.171 / 筆記 CH6" },
        { title: "PLC 4P 策略：介紹期", qw: "制訂", marks: 4, keywords: ["基本", "高價", "選擇性", "廣告"], explanation: "產品：基本型號；價格：高價；分銷：選擇性；推廣：廣告建立認知", example: "新智能家居產品只推出基本款", source: "課本 P.175 / 筆記 CH6" },
        { title: "PLC 4P 策略：成長期", qw: "制訂", marks: 4, keywords: ["改良", "降價", "密集性", "廣告"], explanation: "產品：改良質量、加功能；價格：降價滲透；分銷：密集性；推廣：廣告減少優惠", example: "MyTV Super 喺成長期", source: "課本 P.177 / 筆記 CH6" },
        { title: "服務特徵：無形性", qw: "解釋", marks: 2, keywords: ["看不到", "摸不到", "嘗試"], explanation: "服務睇唔到、摸唔到，消費者難評估", example: "買之前無法確定服務質素", source: "課本 P.185 / 筆記 CH6" },
        { title: "服務特徵：多變性", qw: "解釋", marks: 2, keywords: ["不同的人", "不同時間", "不一致"], explanation: "服務質素視乎邊個提供、幾時、點提供", example: "同一個餐廳，唔同店員服務唔同", source: "課本 P.187 / 筆記 CH6" },
        { title: "服務特徵：不可分割性", qw: "解釋", marks: 2, keywords: ["同時", "生產", "消費"], explanation: "服務嘅生產同消費同時發生", example: "理髮師剪髮同時，顧客就在度消費", source: "課本 P.189 / 筆記 CH6" },
        { title: "服務特徵：易逝性", qw: "解釋", marks: 2, keywords: ["不能儲存", "浪費"], explanation: "服務唔可以儲存，冇用就浪費", example: "航空公司冇賣出嘅座位就浪費", source: "課本 P.191 / 筆記 CH6" },
        { title: "電子市場 vs 傳統市場", qw: "比較", marks: 6, keywords: ["產品", "價格", "分銷", "推廣"], explanation: "電子市場：產品可下載、價格較低、分銷直接、推廣用網絡；傳統市場：產品實體、價格較高、分銷經中間人、推廣用傳統媒體", example: "網店賣T恤 vs 实体店賣T恤", source: "課本 P.195 / 筆記 CH6" }
      ],
      examples: [
        { title: "智能家居產品PLC", scenario: "科技公司推出智能家居產品", action: "介紹期用撇脂定價、選擇性分銷、大量廣告", result: "建立品牌認知，吸引創新者" },
        { title: "銀行服務：易逝性", scenario: "銀行關閉分行", action: "用預約系統、增加自助服務", result: "解決服務不能儲存嘅問題" },
        { title: "銀行服務：不可分割性", scenario: "銀行服務質素參差", action: "培訓員工、標準化程序", result: "解決生產消費同時發生嘅問題" }
      ]
    },
    {
      id: "ch7",
      title: "顧客關係管理",
      shortTitle: "CRM",
      icon: "",
      color: "#007b83",
      points: [
        { title: "顧客關係管理定義", qw: "解釋", marks: 4, keywords: ["優越價值", "滿意度", "忠誠", "利潤"], explanation: "透過提供優越價值，增加顧客滿意度，建立同維持關係（忠誠），從中賺取利潤", example: "超級市場用會員制度吸引顧客重複購買", source: "課本 P.210 / 筆記 CH7" },
        { title: "CRM 特徵：運用資訊科技", qw: "解釋", marks: 2, keywords: ["數據", "記錄", "溝通"], explanation: "用資訊科技記錄同儲存顧客數據，進行溝通同收集意見", example: "用會員系統記錄顧客購物習慣", source: "課本 P.212 / 筆記 CH7" },
        { title: "CRM 特徵：顧客導向", qw: "解釋", marks: 2, keywords: ["需要", "偏好", "了解"], explanation: "了解顧客需要同偏好，提供個人化服務", example: "根據顧客購買紀錄推薦相關產品", source: "課本 P.214 / 筆記 CH7" },
        { title: "CRM 特徵：為企業創造價值", qw: "解釋", marks: 2, keywords: ["終身價值", "忠誠"], explanation: "增加顧客終身價值，為企業創造長期利潤", example: "忠誠顧客會重複購買，帶來穩定收入", source: "課本 P.216 / 筆記 CH7" },
        { title: "CRM 目標：吸引新顧客", qw: "解釋", marks: 2, keywords: ["新顧客", "推廣", "試用"], explanation: "透過市場活動吸引新顧客試用產品或服務", example: "新客戶專享優惠", source: "課本 P.218 / 筆記 CH7" },
        { title: "CRM 目標：提升忠誠度", qw: "解釋", marks: 2, keywords: ["現有顧客", "保留", "關係"], explanation: "提升現有顧客忠誠度，保留現有顧客，建立長期關係", example: "會員積分計劃鼓勵重複購買", source: "課本 P.220 / 筆記 CH7" }
      ],
      examples: [
        { title: "超市會員制度", scenario: "超市想增加顧客忠誠", action: "推出會員積分計劃", result: "會員重複購買，增加營業額" },
        { title: "銀行客戶關係", scenario: "銀行想了解客戶需要", action: "用客戶數據分析，提供個人化服務", result: "提升客戶滿意度同忠誠" },
        { title: "餐廳CRM", scenario: "餐廳想吸引新顧客", action: "新客戶專享優惠", result: "吸引新顧客嘗試" }
      ]
    }
  ],
  qwTypes: [
    { id: "explain", label: "解釋/何謂", icon: "", color: "#1a73e8" },
    { id: "describe", label: "描述", icon: "", color: "#e8710a" },
    { id: "compare", label: "比較", icon: "", color: "#9334e6" },
    { id: "suggest", label: "建議", icon: "", color: "#0f9d58" },
    { id: "develop", label: "制訂", icon: "", color: "#d93025" },
    { id: "list", label: "指出", icon: "", color: "#f9ab00" }
  ]
};
