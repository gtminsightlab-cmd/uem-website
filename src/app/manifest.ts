import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Upper Echelon Management',
    short_name: 'UEM',
    description:
      'U.S. pharmaceutical and medical-aesthetics commercialization strategy, launch readiness, organization design, and RxLaunchOS.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F4F1EA',
    theme_color: '#164B52',
  };
}
