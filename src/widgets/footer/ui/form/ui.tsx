import styles from './styles.module.scss'
import { Input } from '@/shared/ui'

export const Form = () => {
  return (
    <form className={styles['form']}>
      <Input
        variant={'primary'}
        type="email"
        placeholder="Ваш email для акций и предложений"
        icon={'/icons/arrow-right.svg'}
      />
    </form>
  )
}
