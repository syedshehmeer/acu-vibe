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

export interface StartScreenSlider extends Struct.ComponentSchema {
  collectionName: 'components_start_screen_sliders';
  info: {
    displayName: 'slider';
    icon: 'bulletList';
  };
  attributes: {
    tagLine: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'booking-session-screen.features': BookingSessionScreenFeatures;
      'premium.features': PremiumFeatures;
      'start-screen.slider': StartScreenSlider;
    }
  }
}
