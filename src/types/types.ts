export interface Data {
  results: [
    {
      type: string,
      category: string,
      question: string,
      correct_answer: string,
      incorrect_answers: Array<string>,
    }
  ]
}

export interface IQuestion {
  data: Data,
  count: number,
  answers: string[],
  handleChoice: (item: string) => React.MouseEventHandler<HTMLAnchorElement>,
}

export type Points = {
  hits: number,
  misses: number
}