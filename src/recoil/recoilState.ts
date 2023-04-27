import { atom } from 'recoil'; 
import { User } from '../components/users/UserTypes';

export const usersState = atom<User[]> ({
    key: 'usersState', 
    default: [] ,
});

export const themeMode = atom({
    key: 'ThemeMode', 
    default: 'light'
})
