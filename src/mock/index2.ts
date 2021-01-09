const sectionMock = [
  {
    id: 1,
    title: '個人資料',
    description: '請填寫報名相關個人資料，以利獲選時通知',
    questions: [
      {
        id: 1,
        type: 5, // 1: 單選；2: 複選；3: 簡答；4: 下拉單選;5: 填充表格
        subject: '姓名',
        isRequired: true,
        needOther: false,
        placeholder: '請輸入姓名',
        inputType:'text',
        options: []
      },
      {
        id: 2,
        type: 5, // 1: 單選；2: 複選；3: 簡答；4: 下拉單選;5: 填充表格
        subject: '手機號碼',
        isRequired: true,
        needOther: false,
        placeholder: '請輸入手機號',
        inputType:'tel',
        options: []
      },
      {
        id: 3,
        type: 5, // 1: 單選；2: 複選；3: 簡答；4: 下拉單選;5: 填充表格
        subject: '身分證號',
        isRequired: true,
        needOther: false,
        placeholder: '請輸入身分證號',
        inputType: 'text',
        options: []
      },
      {
        id: 4,
        type: 5, // 1: 單選；2: 複選；3: 簡答；4: 下拉單選;5: 填充表格
        subject: '工作單位/學校名稱',
        isRequired: true,
        needOther: false,
        placeholder: '請輸入工作單位/學校名稱',
        inputType:'text',
        options: []
      },
      {
        id: 5,
        type: 5, // 1: 單選；2: 複選；3: 簡答；4: 下拉單選;5: 填充表格
        subject: '郵箱',
        isRequired: true,
        needOther: false,
        placeholder: '請輸入您的常用郵箱',
        inputType:'text',
        options: []
      },
      {
        id: 6,
        type: 4, // 1: 單選；2: 複選；3: 簡答；4: 下拉單選;5: 填充表格
        subject: '職業',
        isRequired: false,
        needOther: false,
        placeholder: '–請選擇–',
        inputType:'',
        options: [
          '工程師',
          '學生',
          '老師',
          '演員',
          '模特兒',
          '農夫'
        ]
      },
      {
        id: 7,
        type: 4, // 1: 單選；2: 複選；3: 簡答；4: 下拉單選;5: 填充表格
        subject: '演唱風格',
        isRequired: false,
        needOther: false,
        placeholder: '–請選擇–',
        inputType:'',
        options: [
          '清唱',
          '搖滾',
          '高音',
          '空靈',
        ]
      },
      {
        id: 8,
        type: 5, // 1: 單選；2: 複選；3: 簡答；4: 下拉單選;5: 填充表格
        subject: '登陸密碼',
        isRequired: false,
        needOther: false,
        placeholder: '請設置6位數登入密碼',
        inputType: 'password',
        options: []
      },
      {
        id: 9,
        type: 5, // 1: 單選；2: 複選；3: 簡答；4: 下拉單選;5: 填充表格
        subject: '確認密碼',
        isRequired: false,
        needOther: false,
        placeholder: '請輸入確認密碼',
        inputType: 'password',
        options: []
      },
      {
        id: 10,
        type: 4, // 1: 單選；2: 複選；3: 簡答；4: 下拉單選;5: 填充表格
        subject: '確認密碼',
        isRequired: false,
        needOther: true,
        placeholder: '-城市-',
        inputType:'password',
        options: [
          '北京',
          '南京',
          '哈爾濱',
          '天津',
          '台北',
          '台中',
          '高雄',
          '花蓮'
        ]
      },
    ]
  }
]

export {
  sectionMock
}
