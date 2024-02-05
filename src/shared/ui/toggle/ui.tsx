'use client'

import classNames from 'classnames'

import styles from './styles.module.scss'

interface IToggleProps {
  selected: boolean
  toggleSelected: () => void
}

export const Toggle = ({ selected, toggleSelected }: IToggleProps) => {
  return (
    <button
      className={classNames(styles['toggle'], {
        [styles['active']]: selected,
      })}
      onClick={toggleSelected}>
      <div
        className={classNames(styles['circle'], {
          [styles['active']]: selected,
        })}></div>
    </button>
  )
}
