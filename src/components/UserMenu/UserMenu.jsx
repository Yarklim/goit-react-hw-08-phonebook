import { Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { BtnLogout, LogoContainer, UserName, WrapperMenu } from './UserMenu.styled';
import stringAvatar from 'utils/avatarFn';

const UserMenu = () => {
  return (
    <WrapperMenu>
      <LogoContainer>
        <Avatar
          {...stringAvatar('Yar Klim')}
          sx={{ bgcolor: deepPurple[500] }}
        />
        <UserName>Kent Dodds</UserName>
      </LogoContainer>
      <BtnLogout type="button">Logout</BtnLogout>
    </WrapperMenu>
  );
};

export default UserMenu;
