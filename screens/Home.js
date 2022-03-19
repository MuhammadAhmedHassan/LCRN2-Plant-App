import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONTS, icons, SIZES, dummyData, images} from '../constants';

function RenderNewPlant({plant}) {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: SIZES.base,
      }}>
      <Image
        source={plant.img}
        resizeMode="cover"
        style={{width: SIZES.width * 0.23, height: '82%', borderRadius: 15}}
      />

      <View
        style={{
          position: 'absolute',
          bottom: '17%',
          right: 0,
          backgroundColor: COLORS.primary,
          paddingHorizontal: SIZES.base,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}>
        <Text style={{color: COLORS.white, ...FONTS.body4}}>{plant.name}</Text>
      </View>

      <TouchableOpacity
        style={{position: 'absolute', top: '15%', left: 8}}
        onPress={() => console.log('Favorite Clicked')}>
        <Image
          source={plant.favourite ? icons.heartRed : icons.heartGreenOutline}
          resizeMode="contain"
          style={{height: 20, width: 20}}
        />
      </TouchableOpacity>
    </View>
  );
}

function NewPlantsSection() {
  return (
    <View style={styles.topSection}>
      <View style={styles.topContainer}>
        <View
          style={{marginTop: SIZES.padding, marginHorizontal: SIZES.padding}}>
          <View style={styles.topHeadingSection}>
            <Text style={{color: COLORS.white, ...FONTS.h2}}>New Plants</Text>

            <TouchableOpacity
              onPress={() => {
                console.log('Focus on pressed');
              }}>
              <Image
                source={icons.focus}
                resizeMode="contain"
                style={{width: 20, height: 20}}
              />
            </TouchableOpacity>
          </View>

          <View style={{marginTop: SIZES.base}}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={dummyData.newPlants}
              keyExtractor={item => item.id.toString()}
              renderItem={({item, index}) => (
                <RenderNewPlant plant={item} index={index} />
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

function TodayShare() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: 340,
        backgroundColor: COLORS.lightGray,
        overflow: 'hidden',
      }}>
      <View style={styles.todayShare}>
        <View style={{marginTop: SIZES.font, marginHorizontal: SIZES.padding}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: COLORS.secondary, ...FONTS.h2}}>
              Today's Share
            </Text>

            <TouchableOpacity
              onPress={() => {
                console.log('See All on pressed');
              }}>
              <Text style={{color: COLORS.secondary, ...FONTS.body3}}>
                See All
              </Text>
            </TouchableOpacity>
          </View>

          {/* Plants */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: SIZES.font,
            }}>
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('PlantDetail');
                }}>
                <Image
                  source={images.plant5}
                  resizeMode="cover"
                  style={{height: 120, width: '100%', borderRadius: 20}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('PlantDetail');
                }}
                style={{marginTop: SIZES.font}}>
                <Image
                  source={images.plant6}
                  resizeMode="cover"
                  style={{height: 120, width: '100%', borderRadius: 20}}
                />
              </TouchableOpacity>
            </View>

            <View style={{flex: 1, marginLeft: SIZES.font}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('PlantDetail');
                }}>
                <Image
                  source={images.plant7}
                  resizeMode="cover"
                  style={{height: 256, width: '100%', borderRadius: 20}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

function AddedFriends() {
  return (
    <View style={{backgroundColor: COLORS.lightGray}}>
      <View style={{marginTop: SIZES.radius, marginHorizontal: SIZES.padding}}>
        <Text style={{color: COLORS.secondary, ...FONTS.h2}}>
          Added Friends
        </Text>
        <Text style={{color: COLORS.secondary, ...FONTS.body3}}>
          {dummyData.friendList.length} total
        </Text>

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {/* Friends component */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {dummyData.friendList.slice(0, 3).map((friend, index) => {
              const notFirst = index !== 0;
              let style = {flexDirection: 'row'};
              if (notFirst) style.marginLeft = -20;
              return (
                <View key={friend.id} style={style}>
                  <Image
                    source={friend.img}
                    resizeMode="cover"
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 25,
                      backgroundColor: COLORS.primary,
                      borderWidth: 3,
                    }}
                  />
                </View>
              );
            })}
            <Text
              style={{marginLeft: 5, color: COLORS.secondary, ...FONTS.body3}}>
              +{dummyData.friendList.length - 3} more
            </Text>
          </View>

          {/* Add new friend */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>Add New</Text>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 40,
                width: 40,
                borderRadius: 10,
                backgroundColor: COLORS.gray,
                marginLeft: SIZES.base,
              }}
              onPress={() => console.log('Add new friend')}>
              <Image
                source={icons.plus}
                resizeMode="contain"
                style={{height: 20, width: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const Home = () => {
  return (
    <ScrollView
      keyboardDismissMode="on-drag"
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {/* New plants section */}
        <NewPlantsSection />

        {/* Today's share */}
        <TodayShare />

        {/* Added Friends */}
        <AddedFriends />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  topSection: {
    height: 250,
    backgroundColor: COLORS.white,
  },
  topContainer: {
    flex: 1,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: COLORS.primary,
  },
  topHeadingSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  todayShare: {
    flex: 1,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: COLORS.white,
  },
});
