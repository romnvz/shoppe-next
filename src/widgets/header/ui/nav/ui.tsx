import { FormEvent, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'

import { accountPaths, basePaths } from './config'
import styles from './styles.module.scss'
import { useHeaderStore } from '../../model'

export const Nav = () => {
  const { isOpen, open, close } = useHeaderStore()
  const [isShowSearchForm, setIsShowSearchForm] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [isShowSearchForm])

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    inputRef.current?.blur()
  }

  const DesktopNav = (
    <nav className={styles['nav']}>
      <ul className={styles['list']}>
        {basePaths.map((path) => (
          <li className={styles['item']} key={path.href}>
            <Link className={styles['link']} href={path.href}>
              {path.text}
            </Link>
          </li>
        ))}
      </ul>
      <ul className={classNames(styles['list'], styles['icons'])}>
        <form className={styles['form']} onSubmit={submitForm}>
          <input
            type="search"
            className={classNames(styles['input'], {
              [styles['hidden']]: !isShowSearchForm,
            })}
            placeholder="Поиск"
            ref={inputRef}
          />
        </form>
        <button
          className={classNames(styles['search-button'], {
            [styles['hidden']]: isShowSearchForm,
          })}
          onClick={() => setIsShowSearchForm(true)}>
          <Image
            src={`/icons/search.svg`}
            width={19}
            height={19}
            alt={'Search button'}
          />
        </button>
        {accountPaths.map((path) => (
          <li className={styles['item']} key={path.href}>
            <Link className={styles['link']} href={path.href}>
              <Image
                src={`/icons/${path.iconName}.svg`}
                width={19}
                height={19}
                alt={path.href}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )

  const MobileNav = (
    <nav className={classNames(styles['nav'], styles['mobile'])}>
      <ul className={styles['list']}>
        <li className={styles['item']}>
          <Link className={styles['link']} href={'/cart'}>
            <Image
              src={`/icons/shopping-cart.svg`}
              width={19}
              height={19}
              alt={'Shopping cart link'}
            />
          </Link>
        </li>
        {!isOpen ? (
          <button
            className={classNames(styles['item'], styles['hamburger'])}
            onClick={open}>
            <Image
              src={`/icons/hamburger.svg`}
              width={19}
              height={19}
              alt={'Hamburger button'}
            />
          </button>
        ) : (
          <button
            className={classNames(styles['item'], styles['hamburger'])}
            onClick={close}>
            <Image
              src={`/icons/close.svg`}
              width={19}
              height={19}
              alt={'Hamburger button'}
            />
          </button>
        )}
      </ul>
    </nav>
  )

  return (
    <>
      {DesktopNav}
      {MobileNav}
    </>
  )
}
