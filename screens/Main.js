import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {greytext, heading, headingbold, title} from '../misc/Fonts';
import {Colors} from '../misc/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderTab from '../src/components/HeaderTab';
import Feed from './pages/Feed';
import Chat from './pages/Chat';
// import Notifications from './pages/Notif';
// import Profile from './pages/User';

const Main = () => {
  const date = new Date();
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const [active, setActive] = useState('Feed');

  return (
    <View style={styles.header}>
      <View style={styles.headerMain}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            {active === 'Feed' ? (
              <>
                {/* <Text style={greytext}>Today</Text> */}
                <Text style={[title, {marginTop: 10}]}>
                  {date.getDate() +
                    ' ' +
                    monthNames[date.getMonth()] +
                    ', ' +
                    date.getFullYear()}
                </Text>
              </>
            ) : null}
            {active === 'Chat' ? (
              <Text style={[title, {marginTop: 10}]}>Chat</Text>
            ) : null}
            {active === 'Notifications' ? (
              <Text style={[title, {marginTop: 10}]}>Notifications</Text>
            ) : null}
            {active === 'Profile' ? (
              <Text style={[title, {marginTop: 10}]}>Profile</Text>
            ) : null}
          </View>
          <TouchableOpacity style={{marginTop: 20}}>
            <Text style={[greytext, {color: '#FFFFFF', fontWeight: 'bold'}]}>
              <Icon name="search" size={20} color={'#FFFFFF'} /> Search
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headerTabs}>
          <HeaderTab
            title="Feed"
            icon={'home-outline'}
            setActive={setActive}
            active={active}
          />
          <HeaderTab
            title="Chat"
            icon={'chatbubble-outline'}
            setActive={setActive}
            active={active}
          />
          <HeaderTab
            title="Notifications"
            icon={'notifications-outline'}
            setActive={setActive}
            active={active}
          />
          <HeaderTab
            title="Profile"
            icon={'person-outline'}
            setActive={setActive}
            active={active}
          />
        </View>
      </View>
      {active === 'Feed' ? <Feed /> : null}
      {active === 'Chat' ? <Chat /> : null}
      {/* {active === 'Notifications' ? <Notifications /> : null}
      {active === 'Profile' ? <Profile /> : null} */}
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  headerMain: {
    paddingHorizontal: 10,
    paddingTop: 35,
    paddingBottom: 10,
    backgroundColor: Colors.secondary,
  },

  headerTabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    marginVertical: 10,
  },
});