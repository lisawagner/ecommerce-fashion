import { NAVLINKS } from '../../models/navlinks'
import { MdClose } from 'react-icons/md'
import Dropdown from './Dropdown';

import {
  MobileNavigationMenu,
  SlideNavTop,
  SlideNavTitle,
  CloseNavBtn,
  MobileMenu,
  MenuCategory
} from './slideNavStyles'

const SlideNav = ({click, handleClick}) => {
  return (
    <>
      <MobileNavigationMenu clicked={click} >

        <SlideNavTop>
          <SlideNavTitle>phenomena</SlideNavTitle>
          <CloseNavBtn onClick={handleClick} >
            <MdClose  name="close-outline" />
          </CloseNavBtn>
        </SlideNavTop>

        <MobileMenu>
        {NAVLINKS.map( (item, index) => {
          return (
            <MenuCategory >
              <Dropdown item={item} key={index} click={click} handleClick={handleClick}/>
            </MenuCategory>
          )
        })}
        </MobileMenu>
      
      </MobileNavigationMenu>
    </>
  )
}

export default SlideNav