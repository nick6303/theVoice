const sectionMock = [
  {
    id: 1,
    title: '個人資料',
    description: '請填寫報名相關個人資料，以利獲選時通知',
    questions: [
      {
        id: 1,
        type: 1, // 1: 單選；2: 複選；3: 簡答；4: 下拉單選
        subject: '请问以下哪些因素使您决定参加活动？(最多选3项)',
        isRequired: true,
        needOther: false,
        options: [
          '活动要求低',
        ]
      }
    ]
  }
]

export {
  sectionMock
}
