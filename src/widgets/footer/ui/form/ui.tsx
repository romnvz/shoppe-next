import Image from 'next/image'
import styles from './styles.module.scss'

export const Form = () => {
  return (
    <form className={styles['form']}>
      <input
        className={styles['input']}
        type="email"
        placeholder="Ваш email для акций и предложений"
      />
			<Image className={styles['icon']} src={'/icons/arrow-right.svg'} width={25} height={9} alt='arrow-right' />
    </form>
  )
}
