import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import { useNavigation } from '@react-navigation/native';

function TopImage() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={images.bannerBg}
      resizeMode="cover"
      style={{
        height: 20,
        width: '100%',
        height: 240,
        paddingTop: SIZES.padding,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: SIZES.padding,
        }}>
        <TouchableOpacity
          style={{
            height: 40,
            width: 40,
            backgroundColor: COLORS.gray,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigation.goBack()}>
          <Image
            source={icons.back}
            resizeMode="contain"
            style={{height: 20, width: 20}}
          />
        </TouchableOpacity>

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

      <View
        style={{marginTop: SIZES.padding, paddingHorizontal: SIZES.padding}}>
        <Text style={{color: COLORS.white, ...FONTS.largeTitle}}>
          Glory Mantas
        </Text>
      </View>
    </ImageBackground>
  );
}

function RequirementsIconAndProgressBar({progress, icon, label, detail}) {
  const progressBar = progress / 2; // As width is 50, so divide the progress to 2
  return (
    <View style={{width: 50}}>
      <View
        style={{
          borderColor: COLORS.gray,
          borderWidth: 2,
          borderRadius: 12,
          height: 50,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{height: 30, width: 30, tintColor: COLORS.secondary}}
        />
      </View>

      {/* Progress Bar */}
      <View
        style={{
          width: '100%',
          height: 4,
          backgroundColor: COLORS.gray,
          marginTop: SIZES.base,
          borderRadius: 10,
          overflow: 'hidden',
        }}>
        <View
          style={{
            height: 4,
            backgroundColor: COLORS.primary,
            width: progressBar,
          }}
        />
      </View>
    </View>
  );
}

function RequirementsBar() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: SIZES.padding,
      }}>
      <RequirementsIconAndProgressBar
        progress={20} // in Percent
        icon={icons.sun}
        label="Sunlight"
        detail="15°C"
      />
      <RequirementsIconAndProgressBar
        progress={30} // in Percent
        icon={icons.drop}
        label="Water"
        detail="250 ML Daily"
      />

      <RequirementsIconAndProgressBar
        progress={50} // in Percent
        icon={icons.temperature}
        label="Room Temp"
        detail="25°C"
      />
      <RequirementsIconAndProgressBar
        progress={80} // in Percent
        icon={icons.garden}
        label="Soil"
        detail="3 Kg"
      />
      <RequirementsIconAndProgressBar
        progress={20} // in Percent
        icon={icons.seed}
        label="Fertilizer"
        detail="150 Mg"
      />
    </View>
  );
}

function RequirementsListItem({icon, label, detail}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: SIZES.padding,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{height: 30, width: 30, tintColor: COLORS.secondary}}
        />
        <Text
          style={{
            marginLeft: SIZES.base,
            color: COLORS.secondary,
            ...FONTS.h3,
          }}>
          {label}
        </Text>
      </View>

      <Text style={{color: COLORS.gray, ...FONTS.h4}}>{detail}</Text>
    </View>
  );
}

function RequirementsList() {
  return (
    <View style={{marginTop: SIZES.padding}}>
      <RequirementsListItem
        progress={20} // in Percent
        icon={icons.sun}
        label="Sunlight"
        detail="15°C"
      />
      <RequirementsListItem
        progress={30} // in Percent
        icon={icons.drop}
        label="Water"
        detail="250 ML Daily"
      />

      <RequirementsListItem
        progress={50} // in Percent
        icon={icons.temperature}
        label="Room Temp"
        detail="25°C"
      />
      <RequirementsListItem
        progress={80} // in Percent
        icon={icons.garden}
        label="Soil"
        detail="3 Kg"
      />
      <RequirementsListItem
        progress={20} // in Percent
        icon={icons.seed}
        label="Fertilizer"
        detail="150 Mg"
      />
    </View>
  );
}

function Requirements() {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={[
            FONTS.h2,
            {
              color: COLORS.secondary,
            },
          ]}>
          Requirements
        </Text>
      </View>

      {/* Requirements bar */}
      <RequirementsBar />

      {/* RequirementsList */}
      <RequirementsList />
    </View>
  );
}

const PlantDetail = ({navigation}) => {
  return (
    <ScrollView>
      <TopImage />

      <View
        style={{
          backgroundColor: COLORS.lightGray,
          marginTop: -50,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}>
        {/* Requirements */}
        <Requirements />

        {/* Footer */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              backgroundColor: COLORS.primary,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: SIZES.padding,
              height: 80,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              flex: 1,
            }}>
            <Text style={{...FONTS.h3, color: COLORS.white}}>Take Action</Text>
            <Image
              source={icons.chevron}
              resizeMode="contain"
              style={{height: 20, width: 20}}
            />
          </View>
          <View style={{width: 40, backgroundColor: 'pink'}} />
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Almost 2 week of growing time</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PlantDetail;

const styles = StyleSheet.create({});
