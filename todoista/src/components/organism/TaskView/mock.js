const mockDatas = {
  todoTasks: [
    {
      doneFlag: false,
      content: "読みたい本",
      children: [
        {
          doneFlag: false,
          content: "フリーランスの税金と領収書",
          children: [],
        },
        {
          doneFlag: false,
          content: "決算書の読み方",
          children: [],
        },
        {
          doneFlag: false,
          content: "WEBアプリのマーケティング",
          children: [
            {
              doneFlag: false,
              content: "マーケ本1",
              children: [],
            },
            {
              doneFlag: false,
              content: "マーケ本2",
              children: [],
            },
          ],
        },
      ],
    },
    {
      doneFlag: false,
      content: "個人開発のためにマーケ本を探す",
      children: [],
    },
  ],
};

export default mockDatas;
