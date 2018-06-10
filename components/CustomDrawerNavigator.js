import CalendarView from './CalendarView';
import CreateCommunity from './CreateCommunity';
import ManageCommunities from './ManageCommunities';
import PastDrops from './PastDrops';
import SideMenu from './SideMenu';
import { createDrawerNavigator } from 'react-navigation';

export default DrawerNavigator = createDrawerNavigator({
    CalendarView: {
        screen: CalendarView
    },
    CreateCommunity: {
        screen: CreateCommunity
    },
    ManageCommunities: {
        screen: ManageCommunities
    },
    PastDrops: {
        screen: PastDrops
    }
}, {
        contentComponent: SideMenu,
        drawerWidth: 300
    });