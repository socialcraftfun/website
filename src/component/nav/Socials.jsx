import React from "react";
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';
import { ReactComponent as DiscordIcon } from '../../assets/icons/discord.svg';
import { ReactComponent as VKIcon } from '../../assets/icons/vk.svg';
import {Popover} from '@headlessui/react'
import styles from './Socials.module.css';


function Socials() {
  return (
      <Popover className="relative">
          <Popover.Button>
              <button
                  type="button"
                  className={styles.popoverButton}>
                  Сообщество
                  <ArrowIcon />
              </button>
          </Popover.Button>

          <Popover.Panel className={styles.popoverPanel}>
              <PopoverLink href='https://discord.gg/Yap846T'>
                  <DiscordIcon/> Дискорд
              </PopoverLink>
              <PopoverLink href='https://vk.com/serversocialcraft'>
                  <VKIcon/> ВКонтакте
              </PopoverLink>
          </Popover.Panel>
      </Popover>
  )
}

export default Socials;

const PopoverLink = ({href, ...props}) => {
    return (
      <a
      className={styles.popoverLink}
      href={href}
      >
          {props.children}
      </a>
    );
}