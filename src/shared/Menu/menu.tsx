import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal,
  IconButton,
} from '@chakra-ui/react';
import { ReactComponent as DottedAction } from '../../assets/dottedThree.svg';

type IMenuProp = {
  upwardThreeDot?: boolean;
  downwardThreeDot?: boolean;
};

const CustomMenu = ({ upwardThreeDot }: IMenuProp) => {
  return (
    <Menu>
      <MenuButton as={IconButton} variant="unstyled">
        {upwardThreeDot && (
          <span className="flex justify-center bg-white w-[50px] h-full items-end p-0">
            <DottedAction />
          </span>
        )}
      </MenuButton>
      <Portal>
        <MenuList>
          <MenuItem>Menu 1</MenuItem>
          <MenuItem>New Window</MenuItem>
          <MenuItem>Open Closed Tab</MenuItem>
          <MenuItem>Open File</MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  );
};

export default CustomMenu;
