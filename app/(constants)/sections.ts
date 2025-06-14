import { AppleIcon, FrenchFries, PizzaIcon, RobotIcon, TestTubeIcon } from '@/components/icons';

export const SECTIONS = [
  {
    href: '/platform/frontend/web',
    title: 'section.web',
    Icon: PizzaIcon,
    disabled: false
  },
  {
    href: '/platform/frontend/ios',
    title: 'section.ios',
    Icon: AppleIcon,
    disabled: true
  },
  {
    href: '/platform/frontend/android',
    title: 'section.android',
    Icon: RobotIcon,
    disabled: false
  },
  {
    href: '/platform/test',
    title: 'section.test',
    Icon: TestTubeIcon,
    disabled: false
  },
  {
    href: '/platform/ml',
    title: 'section.ml',
    Icon: TestTubeIcon,
    disabled: true
  },
  {
    href: '/platform/backend',
    title: 'section.backend',
    Icon: FrenchFries,
    disabled: false
  },
  {
    href: '/platform/system-analysis',
    title: 'section.system-analysis',
    Icon: TestTubeIcon,
    disabled: true
  },
  {
    href: '/platform/autotests',
    title: 'section.autotests',
    Icon: TestTubeIcon,
    disabled: true
  },
  {
    href: '/platform/information-security',
    title: 'section.information-security',
    Icon: TestTubeIcon,
    disabled: true
  }
];
