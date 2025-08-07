import type { Schema, Struct } from '@strapi/strapi';

export interface BookingSessionScreenFeatures extends Struct.ComponentSchema {
  collectionName: 'components_booking_session_screen_features';
  info: {
    displayName: 'features';
    icon: 'bulletList';
  };
  attributes: {
    bulletPoint: Schema.Attribute.String;
  };
}

export interface EmotionalToolkitScreenHeadingDescription
  extends Struct.ComponentSchema {
  collectionName: 'components_emotional_toolkit_screen_heading_descriptions';
  info: {
    displayName: 'headingDescription';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
  };
}

export interface EmotionalToolkitScreenHeadingDescriptionFrequency
  extends Struct.ComponentSchema {
  collectionName: 'components_emotional_toolkit_screen_heading_description_frequencies';
  info: {
    displayName: 'headingDescriptionFrequency';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    frequency: Schema.Attribute.String;
    heading: Schema.Attribute.String;
  };
}

export interface GlobalKeyValuePair extends Struct.ComponentSchema {
  collectionName: 'components_global_key_value_pairs';
  info: {
    displayName: 'keyValuePair';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface PremiumFeatures extends Struct.ComponentSchema {
  collectionName: 'components_premium_features';
  info: {
    displayName: 'features';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SeasonWellnessScreenKeyValuePair
  extends Struct.ComponentSchema {
  collectionName: 'components_season_wellness_screen_key_value_pairs';
  info: {
    displayName: 'keyValuePair';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface StartScreenSlider extends Struct.ComponentSchema {
  collectionName: 'components_start_screen_sliders';
  info: {
    displayName: 'slider';
    icon: 'bulletList';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    tagLine: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'booking-session-screen.features': BookingSessionScreenFeatures;
      'emotional-toolkit-screen.heading-description': EmotionalToolkitScreenHeadingDescription;
      'emotional-toolkit-screen.heading-description-frequency': EmotionalToolkitScreenHeadingDescriptionFrequency;
      'global.key-value-pair': GlobalKeyValuePair;
      'premium.features': PremiumFeatures;
      'season-wellness-screen.key-value-pair': SeasonWellnessScreenKeyValuePair;
      'start-screen.slider': StartScreenSlider;
    }
  }
}
