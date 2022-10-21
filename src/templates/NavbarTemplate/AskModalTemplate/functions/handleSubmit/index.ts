import { QuestionProps } from 'global/types/QuestionProps'
import { postQuestion } from 'services/posts/postQuestion'

export async function handleSubmit(
  token: string,
  data: QuestionProps,
  setOpen: any,
  navigate: any
) {
  const response = await postQuestion(token, data)

  if (response) {
    setOpen(false)
    navigate(`../questions/${response.id}`)
  }
}
